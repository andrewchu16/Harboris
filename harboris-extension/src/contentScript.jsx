// src/contentScript.jsx

import React from "react";
import { createRoot } from "react-dom/client";

/**
 * 1. Create a new <div> and attach it to the document body.
 * 2. Render our React component inside that <div>.
 */

function injectApp() {
  const containerId = "my-chrome-extension-container";

  // Avoid reinjecting if it already exists
  if (document.getElementById(containerId)) {
    return;
  }

  const appContainer = document.createElement("div");
  appContainer.id = containerId;

  // Style so it's fixed to the right side of the viewport
  Object.assign(appContainer.style, {
    position: "fixed",
    top: "0",
    right: "0",
    width: "300px",
    height: "100vh",
    zIndex: 999999, // make sure it's on top
  });

  document.body.appendChild(appContainer);

  // Create the root for React 18+
  const root = createRoot(appContainer);
  root.render(<InjectedComponent />);
}

// A simple React component that displays a rectangle with text
function InjectedComponent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderLeft: "2px solid #ccc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Hello from your Chrome Extension!</h2>
      <p>This is an injected React component.</p>
    </div>
  );
}

// Run the injection as soon as the content script is loaded
injectApp();
