import { useDispatch, useSelector } from "react-redux"
import { changeCompleted, deleteTodo, editTodo } from "../features/todos-slice";
import { useState } from "react";
import './TodoList.css'


function TodoList() {
    const [input,setInput] = useState('');
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    
    const lengthOfComleted = todos.filter((todo)=> todo.isCompleted).length;
    function delTodo(id){
        dispatch(deleteTodo({id}))
    }
    const handleTodoItemClick =(id,text) =>(e)=>{
        dispatch(editTodo({id, text, isEditMode: true}))
    }
    const todoItemFormSubmit = (id,text) =>(e)=>{
        e.preventDefault();
        dispatch(editTodo({ id, text:  text, isEditMode: false }))
    }
    const  handleTodoItemChange = (id)=> (e)=>{
        setInput(e.target.value);
        dispatch(editTodo({id, text: e.target.value, isEditMode:true}))
    }

    const changeIsCompleted = (id)=>(e)=>{
        dispatch(changeCompleted({id,isCompleted:e.target.checked}))
        console.log(todos);
    }


  return (
    <div className="list_box">
        {todos.map((el)=>{
            return(
                <div key={el.id} className="item_box">
                    {!el.isEditMode ? (
                        <>
                            <div style={{display:'flex',justifyContent:'center', alignItems:'center',gap:'5px'}}>
                                <input type="checkbox" checked={el.isCompleted} onChange={changeIsCompleted(el.id)}/>
                                <p className="txt" style={{textDecoration:el.isCompleted ? 'line-through' : 'none'}} onClick={handleTodoItemClick(el.id,el.text)}>{el.text}</p>
                            </div>
                            <button className="delete_btn" onClick={()=>delTodo(el.id)}>x</button>

                        </>
                    ):(
                        <form action="" className="form_content" onSubmit={todoItemFormSubmit(el.id,el.text)} >
                            <input type="text" className='input_field' value={el.text}  onChange={handleTodoItemChange(el.id)}  />
                            <button className='add_btn'>done</button>
                        </form>
                    )}
                </div>
            )
        })}
        {todos.length ? <p className="completed_todo">{lengthOfComleted}/{todos.length} completed</p>:null}
        
    </div>
  )
}

export default TodoList