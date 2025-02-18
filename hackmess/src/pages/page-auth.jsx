import React from "react";
import { Link } from "react-router-dom";
const AuthUser = ({ name, isUser }) => {
  return (
    <div className="login">
      <form className="login__form">
        <h1>Авторизация {name}</h1>
        <input
          placeholder="e-mail"
          type="text"
          className="login__input"
          name="username"
        ></input>
        <div className="Err" id="emERR"></div>
        <input
          placeholder="Пароль"
          type="password"
          className="login__input"
          name="pass"
        ></input>
        <div className="Err" id="authERR"></div>
        {isUser ? (
          <>
            <Link to="/faq">
              <button type="submit" className="login__button">
                Войти
              </button>
            </Link>
            <br></br>
            <Link to="/manage">Я менеджер</Link>
          </>
        ) : (
          <>
            <Link to="/managesupport">
              <button type="submit" className="login__button">
                Войти
              </button>
            </Link>
            <br></br>
            <Link to="/login">Я пользователь</Link>
          </>
        )}
      </form>
    </div>
  );
};

export { AuthUser };
