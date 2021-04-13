import { observer } from "mobx-react-lite"
import React, { useContext, useState } from "react"
import { NavLink, useHistory, useLocation } from "react-router-dom"
import { Context } from ".."
import { logins, registration } from "../http/userAPI"
import style from "./Auth.module.css"


const Auth = observer(() => {

    const { user } = useContext(Context)
    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === "/login"

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [patronymic, setPatronymic] = useState("")


    const click = async (e) => {
        e.preventDefault()
        try {
            let data
            if (isLogin) {
                data = await logins(login, password)

            } else {
                data = await registration(login, password)

            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push("/")
        } catch (e) {
            alert(e.response.data.message)
        }



    }

    return (
        <div className={style.container}>
            <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <form>
                {isLogin ? (<div className={style.auth}>
                    <input placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)} />
                    <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                ) : (<div>
                    <input placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)} />
                    <input placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
                    {/* <input placeholder="Имя" value={name} onChange={ e => setName(e.target.value)}/>
                <input placeholder="Фамилия" value={surname} onChange={ e => setSurname(e.target.value)}/>
                <input placeholder="Отчество" value={patronymic} onChange={ e => setPatronymic(e.target.value)}/>
                <select>
                    <option>Руководитель</option>
                    <option>Пользователь</option>
                </select>  */}
                </div>
                )}

                <div className={style.row}>
                    {isLogin ? <div >Нет аккаунта? <NavLink className={style.link} to="/registration">Регистрация</NavLink></div> : <div>Уже зарегистрированы? <NavLink className={style.link} to="/login">Войдите</NavLink></div>}

                    <button onClick={click}>{isLogin ? "Войти" : "Регистрация"}</button>
                </div>

            </form>
        </div>

    )
})


export default Auth