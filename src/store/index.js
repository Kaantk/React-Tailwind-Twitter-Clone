import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "./modal";
import appearance from "./appearance";

export const store = configureStore({
  reducer: {
    auth: auth,
    modal: modal,
    appearance: appearance,
  },
});
