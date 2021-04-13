import React from "react"
import TodoList from "../components/TodoList"
import style from "./Todo.module.css"
import { observer } from "mobx-react-lite"

const Todo = observer(() => {

    return (
        <div className={style.containerTodo}>
            <TodoList /> 
        </div>
    )
})

export default Todo