import { _setCurrentAccount } from "~/store/auth/index";
import { store } from "~/store";

export const setCurrentAccount = (account) =>
  store.dispatch(_setCurrentAccount(account));
