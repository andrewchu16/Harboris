// popup.js

// 1. Keys (Replace with your own; not secure in production)
const OPENAI_API_KEY = ""
const SERPAPI_API_KEY = "";

// 2. Event: "Check Product"
document.getElementById("check-btn").addEventListener("click", async () => {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Checking...";
  resultDiv.classList.add("loading");

  try {
    // A) Get Active Tab + URL
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.id) {
      throw new Error("No active tab found.");
    }
    const currentUrl = tab.url;

    // B) Scrape the page to get the product name/title
    const injectionResults = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // Adjust these selectors to suit the page:
        // e.g. Amazon might have #productTitle, others might have h1, etc.
        const titleEl = document.querySelector("#productTitle") 
                     || document.querySelector("h1")
                     || document.querySelector(".product-title");
        const productTitle = titleEl ? titleEl.innerText.trim() : "";
        return productTitle;
      }
    });
    if (!injectionResults?.length) {
      throw new Error("Could not scrape product name.");
    }
    const productName = injectionResults[0].result || "Unknown Product";

    // C) Use SerpApi to search for product name
    const serpData = await fetchSerpApiResults(productName);
    // Summarize the top few results
    const serpSummary = summarizeSerpData(serpData);

    // D) Build the final prompt with your rating instructions
    //    We'll embed the website URL, the product name, and the SerpApi info
    const userPrompt = generatePrompt(currentUrl, productName, serpSummary);

    // E) Call OpenAI with that prompt
    const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o", // or "gpt-4" if you have access
        messages: [{ role: "user", content: userPrompt }],
        max_tokens: 50,
        temperature: 0.7
      })
    });

    if (!openAiResponse.ok) {
      throw new Error(`OpenAI API error: ${openAiResponse.status} ${openAiResponse.statusText}`);
    }

    const data = await openAiResponse.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    // F) Display the verdict (e.g. "REAL 2" or "FLAG 7")
    if (reply) {
      resultDiv.textContent = reply;
    } else {
      resultDiv.textContent = "No response received.";
    }
  } catch (error) {
    console.error(error);
    resultDiv.textContent = "Error: " + error.message;
  } finally {
    resultDiv.classList.remove("loading");
  }
});

// ===== HELPER FUNCTIONS ===== //

// 1) Call SerpApi with product name
async function fetchSerpApiResults(query) {
  const baseUrl = "https://serpapi.com/search";
  const params = new URLSearchParams({
    engine: "google",
    q: query,
    api_key: SERPAPI_API_KEY
  });

  const response = await fetch(`${baseUrl}?${params.toString()}`, { method: "GET" });
  if (!response.ok) {
    throw new Error(`SerpApi error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

// 2) Summarize SerpApi results for the prompt
function summarizeSerpData(serpJson) {
  let summary = "";
  if (serpJson.organic_results) {
    serpJson.organic_results.slice(0, 3).forEach((r, i) => {
      summary += `Result #${i + 1}:
Title: ${r.title}
Snippet: ${r.snippet}
Link: ${r.link}

`;
    });
  }
  return summary.trim();
}

// 3) Build the final prompt (with your instructions)
function generatePrompt(url, productName, serpSummary) {
  return `Check products from WEBSITE:
${url}

Product Name: ${productName}

Online Search Results:
${serpSummary || "No search data found"}

Rate if this is a real or counterfeit/scam product on a scale of 1 to 10. 
1 is real, 10 is counterfeit/scam. Check multiple online sources to see if it's counterfeit. Also see if the url is secure and the website is reputable. Check if there's any typos in the website. If it seems sketchy, it's more likely to be counterfeit or a scam.
If it seems sketchy, it's more likely to be counterfeit or a scam.

Then, provide an answer that says REAL or CAUTION or FLAG. Output real if the number is 1-2. Output caution if the number is 3-5. Output flag if the number is 6-10.

Only output one of these three options with the number. Only output the word and the number. Do not output any reasoning or anything other than the word and the number.

`;//Only output one of these three options with the number. Only output the word and the number. Do not output any reasoning or anything other than the word and the number.
}
