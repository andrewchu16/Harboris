// src/contentScript.jsx

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/**
 * 1. Create a new <div> and attach it to the document body.
 * 2. Render our React component inside that <div>.
 */

function injectApp() {
  const containerId = "harboris-ext-container";

  // Avoid reinjecting if it already exists
  if (document.getElementById(containerId)) {
    return;
  }

  const appContainer = document.createElement("div");
  appContainer.id = containerId;

  // Style so it's fixed to the right side of the viewport
  Object.assign(appContainer.style, {
    position: "fixed",
    top: "10px",
    right: "10px",
    width: "400px",
    height: "700px",

    zIndex: 999999, // make sure it's on top
  });

  document.body.appendChild(appContainer);

  // Create the root for React 18+
  const root = createRoot(appContainer);
  root.render(<App />);
}

// Run the injection as soon as the content script is loaded
injectApp();
