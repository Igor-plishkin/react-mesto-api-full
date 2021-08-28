import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  function handleRegistrSubmit(e) {
    e.preventDefault();

    props.onRegistr(email, password);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={handleRegistrSubmit}>
        <input
          className="login__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleEmailChange}
          value={email}
        />
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Пароль"
          required
          onChange={handlePasswordChange}
          value={password}
        />
        <button className="login__submit-btn" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <Link className="login__link" to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
