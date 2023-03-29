import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import uuid from "uuid";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

const initialState: Todo[] = [];

const toDoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const newTodo = { id: uuid.v4(), title: action.payload, completed: false };
            state.push(newTodo);
        },
        remove: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        }

    },
});

export default toDoSlice.reducer;
export const { add, remove } = toDoSlice.actions;