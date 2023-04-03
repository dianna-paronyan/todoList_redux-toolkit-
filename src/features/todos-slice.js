import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            const newTodo = {
                id: nanoid(),
                text:action.payload.text
            }
            state.push(newTodo);
        },
        deleteTodo:(state,action)=>{
          return  state.filter((todo)=> todo.id !== action.payload.id)
        }
    }
})

export const {addTodo,deleteTodo} = todosSlice.actions;
export default todosSlice.reducer;