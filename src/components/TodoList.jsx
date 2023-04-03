import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../features/todos-slice";


function TodoList() {
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    function delTodo(id){
        dispatch(deleteTodo({id}))
    }
  return (
    <div>
        {todos.map((el)=>{
            return(
                <div key={el.id} style={{display:'flex',alignItems:'center'}}>
                    <p>{el.text}</p>
                    <button onClick={()=>delTodo(el.id)}>x</button>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList