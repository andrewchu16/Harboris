import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Frame from "react-frame-component";

createRoot(document.getElementById("ext-root")!).render(
  <StrictMode>
    <Frame head={
      <link type='text/css' rel='stylesheet' href='index.css' />}>
      <App />
    </Frame>
  </StrictMode>
);
