import React , {useState} from "react";

export default function Todo() {

    const [inputTodo, setInputTodo ] = useState('');
    const [todos , setTodo] = useState([]);
    const [complete , setComplete ] = useState([]);
    const [validationMessage, setValidationMessaege] = useState('');

    function handleInputSubmit(e) {
        e.preventDefault()

        if (!inputTodo) {
            setValidationMessaege('Please enter a task to do.')
            return ;
        }


        const addTodo = {
            id : todos.length,
            task : inputTodo,
        }

        setTodo([addTodo ,...todos])

        setInputTodo('')
    }

    function handleCheckInput(index, e) {
        const completedTask = todos.filter( item => {
            return item.id === index
        })

        
        
        
        const pendingTask = todos.filter(item => {
            return item.id !== index
        })
        setTodo(prevItems => [...pendingTask])
        setComplete(prevData => [...completedTask])
    }

    const listPendingTodo = todos.map( item => {
        return <div className='todo-output' key={item.id}>
            <li> {item.task} </li>
            <input type="checkbox" name="check" id="check" onClick={(e) => handleCheckInput(item.id)}/>
        </div>
    })
    


    return <div className='container'>
        <h1>Track your tasks and stay productive</h1>
        
        <div className="todo-form">
            <form onSubmit={handleInputSubmit}>
                <label htmlFor="todo">Task todo :</label><br/>
                <input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}  id='todo'   placeholder='Input task'/>

                <button id='click' >Submit</button> 
                <p id='message'>{validationMessage}</p>

            </form>
        </div>


        <div className="list-todo">
            <h3>Pending Task</h3>
            <ul>
                {listPendingTodo}              
            </ul>
        </div>

        <div className="list-todo">
            <h3>Completed task</h3>
            <ul>
            <p>Lorem, ipsum.</p>                
                <p>Lorem, ipsum.</p>                
                <p>Lorem, ipsum.</p>                
                <p>Lorem, ipsum.</p>                
                <p>Lorem, ipsum.</p> 
            </ul>
        </div>
    </div>
}