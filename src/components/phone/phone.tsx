import * as React from "react";

import Search from "../search/search";

const Phone = (): JSX.Element => {
  return (
    <div className="phone">
      <img className="phone__image" src={require("../../img/apple-iphone-12.png")} alt="apple-iphone-12"/>
      {/* TODO: сделать alt по имени телефона */}
      <p className="phone__text">Apple iPhone 12</p>
      <button className="phone__change">Заменить телефон</button>
      {/* <Search className={"phone__search"}></Search> */}
    </div>
  );
};

export default Phone;