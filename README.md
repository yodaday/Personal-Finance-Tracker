# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

### **Project: Personal Finance Tracker**

### **Project Overview:**

The Personal Finance Tracker project involves designing and developing a comprehensive application for tracking personal income, expenses, and savings goals. This project provides hands-on experience in building custom hooks, applying advanced React methodologies, and styling with Tailwind CSS. Participants will also leverage GitHub Copilot to enhance coding productivity and efficiency.

### **Key Features:**

#### **UI/UX Design:**

- **Responsive Design:** Ensure the application is responsive and visually appealing across various devices.
- **User-Friendly Interface:** Design intuitive and easy-to-navigate interfaces.

#### **Custom Hooks:**

- **Reusability:** Create custom hooks to encapsulate and reuse logic across components.
- **Separation of Concerns:** Ensure better separation of concerns and a cleaner codebase.

#### **Advanced React Methodologies:**

- **Code Splitting:** Implement code splitting to optimize application performance.
- **Lazy Loading:** Use React's lazy loading for components to improve initial load times.
- **Error Boundaries:** Implement error boundaries to handle errors gracefully.

#### **Styling with Tailwind CSS:**

- **Utility-First CSS:** Use Tailwind CSS for rapidly building custom designs.
- **Responsive Utilities:** Apply Tailwind's responsive utilities for a mobile-first design approach.

#### **GitHub Copilot Assistance:**

- **Code Suggestions:** Utilize GitHub Copilot for generating code snippets and suggestions.
- **Enhanced Productivity:** Leverage Copilot's AI capabilities to improve coding efficiency.

### **Project Structure:**

#### **1. Setup and Initialization:**

- **Initialize Project:** Set up a new React project using Create React App or Vite.
- **Install Dependencies:** Install necessary dependencies including Tailwind CSS and any other libraries.

#### **2. UI/UX Design:**

- **Layout Design:** Design the main layout including dashboard, income, expenses, and savings goal pages.
- **CSS Styling:** Apply Tailwind CSS for styling the application, ensuring responsiveness.

#### **3. Custom Hooks:** (optional)

- **Create Hooks:** Develop custom hooks for encapsulating reusable logic (e.g., `useFetchTransactions`, `useIncome`, `useExpenses`).
- **Utilize Hooks:** Use custom hooks within components to manage state and side effects.

#### **4. Advanced React Methodologies:**

- **Code Splitting:** Implement code splitting using React's `React.lazy` and `Suspense`.
- **Lazy Loading:** Lazy load components to improve initial load times.
- **Error Boundaries:** Create error boundaries to catch and handle errors gracefully.

#### **5. Key Features Implementation:**

- **Income Management:** Allow users to input and categorize income sources.
- **Expense Tracking:** Enable users to log and categorize expenses.
- **Savings Goals:** Allow users to set and track progress towards savings goals.
- **Financial Overview:** Provide a dashboard with a summary of income, expenses, and savings.
- **Data Visualization:** Use charts and graphs to visualize financial data.

#### **6. GitHub Copilot Assistance:**

- **Code Generation:** Utilize GitHub Copilot for code suggestions and generation.
- **Productivity Enhancements:** Implement Copilot's suggestions to enhance coding productivity.

#### **7. Documentation:**

- **README File:** Provide clear instructions for setting up and running the application.
- **API Documentation:** Document the usage of custom hooks and advanced React methodologies.

## Note:

Please make the use of the Context API to handle the state management. A better UI can be created to get a good grasp on the UI materials covered.
