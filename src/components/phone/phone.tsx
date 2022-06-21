import * as React from "react";
import { useState, useEffect } from "react";

import Replace from "../replace/replace";

interface PhoneProps {
  isLast?: boolean,
  image: string,
  name: string,
  id: number,
}

const Phone = ({isLast = false, image, name, id}: PhoneProps): JSX.Element => {
  const [isReplaceOpen, setReplaceOpen] = useState(false);

  useEffect (
    () => {
      if (isReplaceOpen) {
        window.addEventListener('click', closeReplacePopup, true);
      }      
      return () => {
        window.removeEventListener('click', closeReplacePopup, true);
      };
    }, [isReplaceOpen]
  )

  const closeReplacePopup = (evt: Event) => {
    const element = evt.target as Element;
    const replaceBlock = document.querySelector('.phone__replace');
    if (replaceBlock == element || replaceBlock.contains(element)) {
      return;
    }
    setReplaceOpen(false);
  };

  return (
    <div className="phone">
      <img className="phone__image" src={require(`../../img/${image}`)} alt={name}/>

      <p className="phone__text">{name}</p>
      {isReplaceOpen
        ? <Replace className={`phone__replace${isLast ? " phone__replace--last": ""}`} id={id}></Replace>
        : <button className="phone__replace-button" onClick={() => setReplaceOpen(true)}>Заменить телефон</button>}
    </div>
  );
};

export default Phone;