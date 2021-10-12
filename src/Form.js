import React from "react";

export default function Form(props) {

    const { onFormSubmit, inputTodo, validationMessage, setInputTodo } = props

    return <>
          <div className="todo-form">
            <form onSubmit={onFormSubmit}>
                <label htmlFor="todo">Task todo :</label><br/>
                <input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}  id='todo'   placeholder='Input task'/>

                <button id='click' >Submit</button> 
                <p id='message'>{validationMessage}</p>

            </form>
        </div>  
    </>
}