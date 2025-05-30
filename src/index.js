import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import { Provider } from "./components/ui/provider";
import "./index.css";

import App from "./App";
import store from "./store";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Provider>
        <App />
      </Provider>
    </StoreProvider>
  </React.StrictMode>
);
