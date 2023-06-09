import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

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
            const newTodo = { id: v4(), title: action.payload, completed: false };
            state.push(newTodo);
        },
        remove: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleCompleted: (state, action: PayloadAction<string>) =>
            state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            }),

    },
});

export default toDoSlice.reducer;
export const { add, remove, toggleCompleted } = toDoSlice.actions;