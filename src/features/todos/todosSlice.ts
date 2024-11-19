// src/features/todos/todosSlice.ts
import { RootState } from "@/configs/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodosState = {
  items: Todo[];
  searchTerm: string;
};

const initialState: TodosState = {
  items: [],
  searchTerm: "",
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    ...initialState,
    searchTerm: "sidosi",
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setSearchTerm } =
  todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.items;
export default todosSlice.reducer;
