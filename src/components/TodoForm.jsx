import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos-slice";


function TodoForm() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    function add(e){
        e.preventDefault();
        dispatch(addTodo({text:inputValue}));
        setInputValue('')
    }

  return (
    <div>
        <form action="" onSubmit={add}>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  />
            <button>Add todo</button>
        </form>
    </div>
  )
}

export default TodoForm