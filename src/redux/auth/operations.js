//https://connections-api.goit.global/
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baswURL = 'https://connections-api.goit.global/';

export const registerThunk = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/register', body)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});