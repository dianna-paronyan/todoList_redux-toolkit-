import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, editTodo } from "../features/todos-slice";
import { useState } from "react";
import './TodoList.css'


function TodoList() {
    const [input,setInput] = useState('');
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    function delTodo(id){
        dispatch(deleteTodo({id}))
    }
    const handleTodoItemClick =(id,text) =>(e)=>{
        dispatch(editTodo({id, text, isEditMode: true}))
        console.log(todos);
    }
    const todoItemFormSubmit = (id) =>(e)=>{
        e.preventDefault();
        dispatch(editTodo({ id, text: input, isEditMode: false }))
    }
    const  handleTodoItemChange = (id)=> (e)=>{
        setInput(e.target.value);
        dispatch(editTodo({id, text: e.target.value, isEditMode:true}))
        console.log(todos);
    }


  return (
    <div className="list_box">
        {todos.map((el)=>{
            return(
                <div key={el.id} className="item_box">
                    {!el.isEditMode ? (
                        <>
                            <p  onClick={handleTodoItemClick(el.id,el.text)}>{el.text}</p>
                            <button className="delete_btn" onClick={()=>delTodo(el.id)}>x</button>
                        </>
                    ):(
                        <form action="" className="form_content" onSubmit={todoItemFormSubmit(el.id)} >
                            <input type="text" className='input_field' value={el.text}  onChange={handleTodoItemChange(el.id)}  />
                            <button className='add_btn'>done</button>
                        </form>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default TodoList