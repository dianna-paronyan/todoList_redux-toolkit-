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
        isCompleted: false
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
              isEditMode: action.payload.isEditMode,
            }
          : todo
      );
    },
    changeCompleted:(state, {payload})=>{
     return state.map((todo)=> todo.id === payload.id ? {...todo, isCompleted:payload.isCompleted} : todo)
    }
  },
});

export const { addTodo, deleteTodo, editTodo, changeCompleted } = todosSlice.actions;
export default todosSlice.reducer;
