import React , {useState, useLayoutEffect} from "react";
import Form from "./Form.js";
import TodoList  from "./TodoList.js";

export default function Todo() {

    const [inputTodo, setInputTodo ] = useState('');
    const [todos , setTodo] = useState([]);
    // const [complete , setComplete] = useState(false);
    const [validationMessage, setValidationMessaege] = useState('');
    const [completedTask, setCompletedTask] = useState([]);
    const [start , setStart] = useState([]);
    const [stop, setStop] = useState([]);

    useLayoutEffect(()=>{
        setStart(new Date())
    }, [todos])

    useLayoutEffect(() => {
        setStop(new Date())
    }, [])


    function handleInputSubmit(e) {
        e.preventDefault();

        const addTodo = {
            id : todos.length,
            todo : inputTodo,
            isComplete : false,
            time : start.toLocaleString(),
            stop : '',
        }

        console.log(addTodo)

        setTodo([addTodo, ...todos])
        setInputTodo('')
    }

    function handleClickComplete(todoId) {
        const filteredTodo = todos.filter(index => index.id !== todoId );
        const completedTodo = todos.filter(index => index.id === todoId);

        setCompletedTask([...completedTodo, ...completedTask]);
        setTodo([...filteredTodo]);
    }
    
    function handleClickUnComplete(todoId) {
        // const selectTodo = completedTask.filter(todo => todo.id !== todoId);
        // const deSelectTodo = completedTask.filter(todo => todo.id === todoId)
 
        // console.log({deSelectTodo})
        // console.log({selectTodo})

        // setCompletedTask([...selectTodo])
    }

    const listPendingTodo = todos.map(todo => {
        console.log(todo.time)
        return <div className='todo-output' key={todo.id}>
            <li>{todo.todo}</li>
            <p>{todo.time}</p>
            <input type="checkbox" name="" id="" onChange={() => handleClickComplete(todo.id)} />
        </div>
    })

    const completedTodo  = completedTask.map((index, id) => {
        
        index.isComplete = true;
        index.id = id;
        return <div className="todo-output" key={index.id}>
            <li>{index.todo}</li>
            <p>{stop.toLocaleString()}</p>
            <input type="checkbox" name="" id="" checked disabled onChange={() => handleClickUnComplete(id)} />
        </div>
    })

    


    return <div className='container'>
        <h1>Track your tasks and stay productive</h1>

        <Form onFormSubmit={handleInputSubmit} inputTodo={inputTodo} validationMessage={validationMessage} setInputTodo={setInputTodo}/> 

        <TodoList listPendingTodo={listPendingTodo} listCompleted={completedTodo}/> 

    </div>
}