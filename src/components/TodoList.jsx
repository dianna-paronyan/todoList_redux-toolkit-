import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../features/todos-slice";
import './TodoList.css'


function TodoList() {
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    function delTodo(id){
        dispatch(deleteTodo({id}))
    }
  return (
    <div className="list_box">
        {todos.map((el)=>{
            return(
                <div key={el.id} className="item_box">
                    <p>{el.text}</p>
                    <button className="delete_btn" onClick={()=>delTodo(el.id)}>x</button>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList