import * as React from "react";

const Phone = (): JSX.Element => {
  return (
    <div className="phone">
      <img className="phone__image" src={require("../../img/apple-iphone-12.png")} />
      <p className="phone__text">Apple iPhone 12</p>
      <button className="phone__change">Заменить телефон</button>
    </div>
  );
};

export default Phone;