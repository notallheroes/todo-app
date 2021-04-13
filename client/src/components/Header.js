import React, { useContext } from 'react';
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Redirect } from "react-router";
import style from "./Header.module.css"
import {useHistory} from 'react-router-dom'




const Header = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <header>
            <div className={style.container}>
                <div className={style.logo} onClick={ () => history.push("/")}>TODO-App</div>
                {user.isAuth ? <button className={style.auth} onClick={() => logOut()} > Выйти </button>
                    : <button className={style.auth} onClick={() => history.push("/login")}>Авторизация</button>
                }
            </div>
        </header>


    );
});

export default Header;