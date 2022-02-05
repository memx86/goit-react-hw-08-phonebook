import axios from "axios";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contacts-actions";

axios.defaults.baseURL = "https://61fe50b5a58a4e00173c97d8.mockapi.io";

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};
export const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const removeContact = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactError(error.message));
  }
};
