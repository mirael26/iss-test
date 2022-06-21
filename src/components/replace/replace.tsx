import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionCreator } from "../../store/action";
import { PhoneProperties, State } from "../../types";

interface ReplaceProps {
  className: string,
  currentId: number,
}

const Replace = ({className = "", currentId}: ReplaceProps): JSX.Element => {
  const phones = useSelector((state: State) => state.phones) as Array<PhoneProperties>;
  const displayedPhones = useSelector((state: State) => state.displayedPhones) as Array<PhoneProperties>;
  const dispatch = useDispatch();

  const [searchedPhones, setSearchedPhones] = useState(null);


  const undisplayedPhones = phones.filter(phone => {
    return !displayedPhones.find(displayedPhone => phone.id === displayedPhone.id);
  })

  const replacePhones = (evt: React.SyntheticEvent): void => {
    const element = evt.target as Element;
    const index = displayedPhones.findIndex(element => element.id === currentId);
    const updatedPhones = displayedPhones.slice();
    updatedPhones[index] = phones.find(phone => phone.id === Number(element.id));

    dispatch(ActionCreator.updateDisplayedPhones(updatedPhones));
  };

  const searchPhones = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const searchingText = evt.target.value;
    if (searchingText === "") {
      searchedPhones ? setSearchedPhones(null) : null;
      return;
    }

    const result = undisplayedPhones.filter((phone) => {
      const searchRegexp = new RegExp(`^${searchingText}| ${searchingText}`, 'i');
      return searchRegexp.test(phone.name);
    });
    setSearchedPhones(result);
  };

  const resultPhones = searchedPhones ? searchedPhones as Array<PhoneProperties> : undisplayedPhones;

  return (
    <div className={`replace ${className}`}>
      {undisplayedPhones.length > 3
        ? <input className="replace__search-input" type="text" placeholder="Поиск" onChange={(evt) => searchPhones(evt)}/>
        : null}
        
      <ul className="replace__phone-list">
        {resultPhones.map((phone, i) => {
          return <li key={`replace-phone-${i}`} className="replace__phone-item">
            <button className="replace__phone-change-button" id={phone.id.toString()} onClick={(evt) => replacePhones(evt)}>Заменить</button>
            <div className="replace__phone-image-container">
              <img className="replace__phone-image" src={require(`./../../img/${phone.image}`)} alt={phone.name}/>
            </div>
            <p className="replace__phone-text">{phone.name}</p>
          </li>
        })}
      </ul>
    </div>
  );
};

export default Replace;