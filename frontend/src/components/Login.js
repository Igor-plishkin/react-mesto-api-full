import React from "react";

function Login(props) {
  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  function handleLoginSubmit(e) {
    e.preventDefault();

    props.onLogin(email, password);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleLoginSubmit}>
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
