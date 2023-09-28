import { _removeModal, _setModal } from ".";
import { store } from "..";

export const setModal = (name, visible = false) =>
  store.dispatch(_setModal({ name, visible }));

export const removeModal = () => store.dispatch(_removeModal());
