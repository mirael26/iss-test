import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionCreator } from "../../store/action";
import { PhoneProperties, State } from "../../types";

interface SearchProps {
  className: string,
  id: number,
}

const Search = ({className = "", id}: SearchProps): JSX.Element => {
  const phones = useSelector((state: State) => state.phones) as Array<PhoneProperties>;
  const displayedPhones = useSelector((state: State) => state.displayedPhones) as Array<PhoneProperties>;
  const dispatch = useDispatch();


  const undisplayedPhones = phones.filter(phone => {
    return !displayedPhones.find(displayedPhone => phone.id === displayedPhone.id);
  })

  const changePhones = (evt: React.SyntheticEvent): void => {
    const element = evt.target as Element;
    const index = displayedPhones.findIndex(element => element.id === id);
    const updatedPhones = displayedPhones.slice();
    updatedPhones[index] = phones.find(phone => phone.id === Number(element.id));

    dispatch(ActionCreator.updateDisplayedPhones(updatedPhones));
  }

  return (
    <div className={`search ${className}`}>
      <input className="search__input" type="text" placeholder="Поиск"/>
      <ul className="search__phone-list">

        {undisplayedPhones.map((phone, i) => {
          return <li key={`phone-${i}`} className="search__phone-item">
            <button className="search__phone-change-button" id={phone.id.toString()} onClick={(evt) => changePhones(evt)}>Заменить</button>
            <div className="search__phone-image-container">
              <img className="search__phone-image" src={require(`./../../img/${phone.image}`)} alt={phone.name}/>
            </div>
            <p className="search__phone-text">{phone.name}</p>
          </li>
        })}
      </ul>
    </div>
  );
};

export default Search;