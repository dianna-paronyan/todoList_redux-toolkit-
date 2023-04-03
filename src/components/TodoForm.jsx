import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos-slice";
import './TodoForm.css';


function TodoForm() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    function add(e){
        e.preventDefault();
        dispatch(addTodo({text:inputValue}));
        setInputValue('')
    }

  return (
    <div className="form_box">
        <form action="" onSubmit={add} className="form_content">
            <input type="text" className='input_field' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  />
            <button className='add_btn'>Add todo</button>
        </form>
    </div>
  )
}

export default TodoForm