import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FinanceProvider } from "./contexts/FinanceContext"; // Import FinanceProvider
import Dashboard from "./components/Dashboard"; // Import Dashboard component

import "./styles/dash.css"; // Your global styles

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* Wrap the entire app in the FinanceProvider */}
      <FinanceProvider>
        <Dashboard />{" "}
        {/* The Dashboard component will have access to the context */}
      </FinanceProvider>
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
