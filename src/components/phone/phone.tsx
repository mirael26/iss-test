import * as React from "react";


import Search from "../search/search";

interface PhoneProps {
  isLast?: boolean,
  image: string,
  name: string,
}

const Phone = ({isLast = false, image, name}: PhoneProps): JSX.Element => {
  return (
    <div className="phone">
      <img className="phone__image" src={require(`../../img/${image}`)} alt={name}/>

      <p className="phone__text">{name}</p>
      <button className="phone__change">Заменить телефон</button>
      {/* <Search className={`phone__search${isLast ? " phone__search--last": ""}`}></Search> */}
    </div>
  );
};

export default Phone;