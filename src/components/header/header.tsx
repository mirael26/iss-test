import * as React from "react";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <nav className="header__nav">
        <a>Каталог</a>
      </nav>
      <h1 className="header__title">Сравнение</h1>
      <div className="header__account">Личный кабинет</div>
    </div>
  );
};

export default Header;