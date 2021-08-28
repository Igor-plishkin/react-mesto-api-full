import { Link, Route, Switch } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__login">
        <Switch>
          <Route path="/sign-in">
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
          </Route>
          <Route path="/sign-up">
            <Link className="header__link" to="/sign-in">
              Войти
            </Link>
          </Route>
          <Route exact path="/">
            <p className="header__user">{props.email}</p>
            <Link className="header__link" to="/sign-in" onClick={props.onSignOut}>
              Выйти
            </Link>
          </Route>
        </Switch>
      </div>
    </header>
  );
}

export default Header;
