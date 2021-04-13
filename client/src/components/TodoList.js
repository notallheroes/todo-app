import React, { useContext, useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import style from "./TodoList.module.css"
import { deleteDeal } from "../http/dealAPI"
import TodoUpdate from "../components/TodoUpdate"
import TodoCreate from "./TodoCreate"
import { getDeal } from "../http/dealAPI"


const TodoList = observer((props) => {

    const { todo } = useContext(Context)

    const [store, setStore] = useState([])

    const [update, setUpdate] = useState(false)
    const [create, setCreate] = useState(false)
    const [index, setIndex] = useState(0)

    const getTodo = async () => {
        getDeal().then(data => {
            todo.setTodos(data)
            setStore(data)
            console.log(data)
        })
    }
        
    const deleteTodo = async id => {
        deleteDeal(id).then(data => {})
        setStore(store.filter(todo => todo.id !== id))
    }

    const createFunc = () => {
        setCreate(true)
    }
    const updateFunc = (e ) => {
        let refe = e.currentTarget.dataset.id
        setIndex(refe)
        
        setUpdate(true)
    }
    
    useEffect(() => {
        getTodo()
        
    }, [update, create])
    debugger
    return (
        <>
    
            <div className={style.todoContainer}>
                <button className={style.btn__createTodo} onClick={createFunc}>Создать задачу</button>
                {create ? <TodoCreate  close={setCreate} /> : null}
                {store.map((t, i) => {
                    return (


                        <div key={t.id} className={style.todo} >
                            <div className={style.descTodo}>
                                <div className={style.title}>{t.title}</div>
                                <div className={style.priority}>Приоритет: {t.priority}</div>
                                <div className={style.deadline}>Дата окончания: {t.deadline}</div>
                                <div className={style.responsible}>Ответственный: {t.responsible}</div>
                                <div className={style.status}>Статус: {t.status}</div>
                            </div>
                            <div className={style.btnTodo}>
                                <button className={style.delete} onClick={() => deleteTodo(t.id)}>Удалить</button>
                                <button className={style.update} data-id={i} key={t.id} onClick={updateFunc}>Обновить</button>
                            </div>

                           
                        </div>
                    )
                })}
                 { update ? <TodoUpdate  close={setUpdate}  todo={todo.todos[index]} /> : null}
            </div>
        </>
    )
})

export default TodoList