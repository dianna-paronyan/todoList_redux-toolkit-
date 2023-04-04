import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.text,
        isEditMode: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              text: action.payload.text,
              isEditMode: action.payload.isEditMode,
            }
          : item
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
