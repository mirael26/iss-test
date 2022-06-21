import * as React from "react";
import { useState, useEffect } from "react";

import Search from "../search/search";

interface PhoneProps {
  isLast?: boolean,
  image: string,
  name: string,
  id: number,
}

const Phone = ({isLast = false, image, name, id}: PhoneProps): JSX.Element => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect (
    () => {
      if (isSearchOpen) {
        window.addEventListener('click', closeSearchPopup, true);
      }      
      return () => {
        window.removeEventListener('click', closeSearchPopup, true);
      };
    }, [isSearchOpen]
  )

  const closeSearchPopup = (evt: Event) => {
    const element = evt.target as Element;
    const searchBlock = document.querySelector('.phone__search');
    if (searchBlock == element || searchBlock.contains(element)) {
      return;
    }
    setSearchOpen(false);
  };

  return (
    <div className="phone">
      <img className="phone__image" src={require(`../../img/${image}`)} alt={name}/>

      <p className="phone__text">{name}</p>
      {isSearchOpen
        ? <Search className={`phone__search${isLast ? " phone__search--last": ""}`} id={id}></Search>
        : <button className="phone__change" onClick={() => setSearchOpen(true)}>Заменить телефон</button>}
    </div>
  );
};

export default Phone;