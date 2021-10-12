import React from "react";


export default function TodoList(props) {
    const {listPendingTodo, listCompleted} = props

    return <>
        
        <div className="list-todo">
            <h3>Pending Task</h3>
            <ul>
                {listPendingTodo}              
            </ul>
        </div>

        <div className="list-todo">
            <h3>Completed task</h3>
            <ul>
                {listCompleted}
            </ul>
        </div>

        </>
}