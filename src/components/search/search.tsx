import * as React from "react";

interface SearchProps {
  className: string,
}

const Search = ({className = ""}: SearchProps): JSX.Element => {
  return (
    <div className={`search ${className}`}>
      <input className="search__input" type="text" placeholder="Поиск"/>
      <ul className="search__phone-list">
        <li className="search__phone-item">
          <button className="search__phone-change-button">Заменить</button>
          <img className="search__phone-image" src={require('./../../img/apple-iphone-12.png')} alt=""/>
          {/* TODO: сделать alt по имени телефона */}
          <p className="search__phone-text">Apple iPhone 12</p>
        </li>

        <li className="search__phone-item">
          <button className="search__phone-change-button">Заменить</button>
          <img className="search__phone-image" src={require('./../../img/apple-iphone-12.png')} alt=""/>
          {/* TODO: сделать alt по имени телефона */}
          <p className="search__phone-text">Apple iPhone 12</p>
        </li>

        <li className="search__phone-item">
          <button className="search__phone-change-button">Заменить</button>
          <img className="search__phone-image" src={require('./../../img/apple-iphone-12.png')} alt=""/>
          {/* TODO: сделать alt по имени телефона */}
          <p className="search__phone-text">Apple iPhone 12</p>
        </li>

        <li className="search__phone-item">
          <button className="search__phone-change-button">Заменить</button>
          <img className="search__phone-image" src={require('./../../img/apple-iphone-12.png')} alt=""/>
          {/* TODO: сделать alt по имени телефона */}
          <p className="search__phone-text">Apple iPhone 12</p>
        </li>
      </ul>
    </div>
  );
};

export default Search;