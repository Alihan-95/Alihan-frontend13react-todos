import { useState } from "react";

function Input() {
    const [todos, setTodos] =useState ([
         {
            text: 'lorem'
         },
         {
            text: 'Css'
         },
    ])
    const [text,setText] = useState('')
    const handlerChange = (e) =>{
        setText(e.target.value)
    }

    const handlerBtn = () => {
        setTodos([
            ...todos,
            {
                text: text
            },
        ])
        setText('')
    }

    return (
      <div className="container">
            <input 
            type="text" 
            className="border border-gray-100" 
            placeholder="Text..." 
            value={text} 
            onChange={(e) => 
            handlerChange(e)
            }/>
            <button onClick={handlerBtn} className="add">add</button>
            {todos.map((todo,index) =>{
                return <div key={index}>{todo.text}</div>
            })}
      </div>
    );
  }
  
  export default Input;
  