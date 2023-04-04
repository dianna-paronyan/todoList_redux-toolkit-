import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos-slice";
import './TodoForm.css';


function TodoForm() {
    const [inputValue, setInputValue] = useState('');
    const [errorText,setErrorText] = useState('');
    const dispatch = useDispatch();

    function add(e){
        e.preventDefault();
        if(inputValue === ''){
          setErrorText('Write a text')
        }else if(inputValue.trim()){
          setErrorText('')
          dispatch(addTodo({text:inputValue}));
        }
        setInputValue('')
    }

  return (
    <div className="form_box">
        <form action="" onSubmit={add} className="form_content">
            <input type="text" className='input_field' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  />
            <button className='add_btn'>Add todo</button>
        </form>
        <p className="err_text">{errorText && errorText}</p>
    </div>
  )
}

export default TodoForm