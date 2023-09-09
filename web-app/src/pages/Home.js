import { useEffect, useState } from "react"
import TodoCreateComponent from "../components/TodoCreateComponent"
import TodoListComponent from "../components/TodoListComponent"
import { api_call } from "../api"

function Home() {
    let [todos, setTodos] = useState([])

    useEffect(() => {


        // fetch("http://localhost:3004/todos?_sort=id&_order=desc")
        //     .then(response => response.json())
        //     .then(result => {
        //         setTodos(result)
        //     })
        //     .catch(error => console.log('error', error));

        api_call("todos?_sort=id&_order=desc", "GET", {}).then(res => {
            setTodos(res)
        }).catch(error => console.log('error', error))


    }, [])

    return <div style={{
        width: "60%",
    }}>
        <TodoCreateComponent setTodos={setTodos} />
        <TodoListComponent todos={todos} setTodos={setTodos} />
    </div>
}

export default Home