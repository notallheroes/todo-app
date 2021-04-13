
import React, {useState, useContext} from "react"
import { createDeal } from "../http/dealAPI"
import style from "./TodoCreate.module.css"
import { getDeal } from "../http/dealAPI"
import {Context} from "../index"



const TodoCreate = ( props) => {
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState("")
    const [priority, setPriority] = useState("middle")
    const [status, setStatus] = useState("ready")
    const [responsible, setResponsible] = useState("")
    

    const { todo } = useContext(Context)

    const addTodo = (e) => {
        
        createDeal( title, description, deadline, priority, status, responsible).then( data => {

        })
        
        e.preventDefault()
        
        props.close(false)
        
    }
    return (
        <>
        
            <div className={style.container}>
                <div className={style.back} onClick={() =>  props.close(false)}></div>
            <div className={style.card}>
                <div className={style.close} onClick={() =>  props.close(false)}>X</div>
                <form>
                    <input className={style.title} value={title} onChange={ (e) => setTitle(e.target.value)} placeholder="Заголовок задачи..." />
                    <input className={style.description} value={description} onChange={ (e) => setDescription(e.target.value)} placeholder="Описание..." />
                    <div className={style.row}>
                        <div>
                            <input className={style.row__deadline} value={deadline} onChange={ (e) => setDeadline(e.target.value)} placeholder="Дата окончания..." />
                    <div className={style.row__priority}>
                        <label>Приоритет: </label>
                        <select value={priority} onChange={ (e) => setPriority(e.target.value)}>
                            <option  value="Высокий">Высокий</option>
                            <option  value="Средний">Средний</option>
                            <option  value="Низкий">Низкий</option>
                        </select>
                    </div>
                        <div className={style.row__status}>
                            <label>Статус: </label>
                        <select value={status} onChange={ ( e ) => setStatus(e.target.value)}>
                            <option value="К выполнению">К выполнению</option>
                            <option value="Выполняется">Выполняется</option>
                            <option value="Выполнена" >Выполнена</option>
                            <option value="Отменена">Отменена</option>
                        </select>
                        </div>
                        
                        <input className={style.row__responsible} value={responsible} onChange={ (e) => setResponsible(e.target.value)} placeholder="Ответственный" />
                        </div>
                        
                        <button className={style.createBtn} onClick={addTodo}>Добавить задачу</button>
                    </div>

                </form>
            </div>
        </div>
        </>
        
    )
}

export default TodoCreate