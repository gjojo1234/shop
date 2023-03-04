import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --background-color-900: #0f172a;
  --background-color-800: #1e293b;
  --background-color-700: #334155;
  --background-color-600: #475569;
  --background-color-500: #64748b;
  --background-color-400: #94a3b8;
  --background-color-300: #cbd5e1;
  --background-color-200: #e2e8f0;
  --background-color-100: #f1f5f9;
  --background-color-50: #f8fafc;
  --light-blue-color-600: #0284C7;
  --light-blue-color-400: #38BDF8;
  --green-color-600: #16A34A;
  --green-color-500: #22C55E;
  --green-color-400: #34D399;
  
}

* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  box-sizing: border-box;
}

`;

export default GlobalStyle;
