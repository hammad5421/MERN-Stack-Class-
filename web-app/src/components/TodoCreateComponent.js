import React, { useState } from 'react'
import { api_call } from '../api'

function TodoCreateComponent(props) {
    const [name, setName] = useState("")
    const handleChange = (e) => setName(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await api_call("todos", "POST", { name: name })
            console.log("new todo: ", data)

            props.setTodos(prev => [data, ...prev])
            setName("")

        } catch (err) {
            console.log("error: ", e)
        }
    }

    return (
        <div>
            <div>TodoCreateComponent</div>
            <form onSubmit={handleSubmit}>
                Todo: <input type="text" value={name} required onChange={handleChange} />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default TodoCreateComponent