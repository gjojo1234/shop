import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AppProvider } from "./components/context/appContext";

import GlobalStyle from "./wrappers/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />

    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
