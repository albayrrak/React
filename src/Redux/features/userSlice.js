import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/fetchUser', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
})

const userState = {
    loading: false,
    users: [],
    message: '',
}

const userSlice = createSlice({
    name: 'users',
    initialState: userState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.loading = true
            state.message = 'İşlem devam ediyor'
        },
        [fetchUsers.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = 'Userlar çekildi'
            state.users = payload
        },
        [fetchUsers.rejected]: (state, { payload }) => {
            state.loading = true
            state.message = 'Userlar çekilirken hata oluştu'
            state.users = []
        }
    }
})

export default userSlice.reducer