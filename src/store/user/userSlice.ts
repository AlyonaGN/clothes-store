import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
    readonly createdAt: Date
    readonly displayName: string
    readonly email: string
}

type UserSlice = {
    currentUser: User | null
}

const initialState: UserSlice = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state.currentUser = action.payload
        }
    }
})

export const { setCurrentUser } = userSlice.actions
export const userReducer = userSlice.reducer
