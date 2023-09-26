import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "~/assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "~/routes";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>
);
