import React, { useState } from 'react'
import { api_call } from '../api'

function TodoListComponent(props) {

    const handleDelete = async (todo_id) => {
        try {
            console.log(todo_id, "clicked")
            await api_call(`todos/${todo_id}`, 'DELETE', {})
            const newTodos = props.todos.filter(t => t.id !== todo_id)
            props.setTodos([...newTodos])
        } catch (error) {
            console.log("Error: ", error)
        }
    }


    return (
        <div>
            <div>TodoListComponent</div>
            {props.todos.length ? <ul>
                {props.todos.map((todo, index) => {
                    return <li key={index}>

                        #{todo.id} - {todo.name}

                        <button onClick={(e) => handleDelete(todo.id)}>Delete</button>
                    </li>
                })}
            </ul> : <p>No Todos found</p>}

        </div>

    )
}

export default TodoListComponent