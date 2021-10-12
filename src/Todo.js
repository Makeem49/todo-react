import React , {useState, useEffect} from "react";
import Form from "./Form.js";
import TodoList  from "./TodoList.js";

export default function Todo() {

    const [inputTodo, setInputTodo ] = useState('');
    const [todos , setTodo] = useState([]);
    const [validationMessage, setValidationMessaege] = useState('');
    const [completedTask, setCompletedTask] = useState([]);
    const [date, setDate] = useState()


    useEffect(() => {
        document.title = `Completed task [ ${completedTask.length} ]`

        return () => {
            document.title = ''
        }
    }, [completedTask])

    // useEffect(() => {
    //     setDate()
    // })
 
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
        setValidationMessaege('')
    }

    console.log(todos)


    function handleCheckInput(index) {
        // console.log({index})
        const pendingTask = todos.filter(item => {
            return item.id !== index;
        })
        const doneTask  = todos[index]

        setCompletedTask([doneTask,...completedTask])
        setTodo(prevItems => [...pendingTask])
    }

    const listPendingTodo = todos.map( item => {
        return <div className='todo-output' key={item.id}>
            <li> {item.task} </li>
            <input type="checkbox" name="check" id="check" onClick={() => handleCheckInput(item.id)}/>
        </div>
    })

    const listCompleted = completedTask.map(item => {
    
        return <div className="todo-output" key={item.id}> 
            <li> {item.task} </li>
            <input type="checkbox" name="check" id="check" checked disabled/>
        </div>
    }) 


    return <div className='container'>
        <h1>Track your tasks and stay productive</h1>

        <Form onFormSubmit={handleInputSubmit} inputTodo={inputTodo} validationMessage={validationMessage} setInputTodo={setInputTodo}/> 

        <TodoList listPendingTodo={listPendingTodo} listCompleted={listCompleted}/> 

    </div>
}