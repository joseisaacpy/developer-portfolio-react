import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SinglePage from "./Pages/SinglePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SinglePage />
  </StrictMode>
);
