import * as React from "react";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <nav className="header__nav">
        <a>Каталог</a>
      </nav>
      <h1 className="header__title">Сравнение</h1>
      <button className="header__account">Личный кабинет</button>
    </div>
  );
};

export default Header;