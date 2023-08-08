import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResetStyle } from "./styles/resetStyles.ts";
import { GlobalStyle } from "./styles/globalStyles.ts";

import { BrowserRouter } from "react-router-dom";
import { AdsProvider } from "./providers/adsProvider.tsx";
import { UserProvider } from "./providers/userProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <UserProvider>
        <AdsProvider>
          <App />
        </AdsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
