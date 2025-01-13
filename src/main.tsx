import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./components/Dashboard";
import { FinanceProvider } from "./contexts/FinanceContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <FinanceProvider>
        <Dashboard />
      </FinanceProvider>
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
