import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TrilogyProvider } from "@trilogy-ds/react/lib/context/provider";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TrilogyProvider>
      <App />
    </TrilogyProvider>
  </StrictMode>
);
