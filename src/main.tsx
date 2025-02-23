import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp.js";
import "./styles.css";

const container = document.getElementById("app") as HTMLDivElement;
createRoot(container).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
