import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://659e9fda47ae28b0bd365337.mockapi.io/myapi";

export const postContact = createAsyncThunk(
    "contacts/addContact",
    async (contactData, thunkAPI) => {
        try {
            const { data } = await axios.post(BASE_URL + "/contacts", contactData);
/*             console.log("postContact>>",data); */
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getContacts = createAsyncThunk(
    "contacts/getContacts",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get(BASE_URL + "/contacts");
/*             console.log("getContacts>>",data); */
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContactById = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
/*             console.log("deleteContactById>>",data); */
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
