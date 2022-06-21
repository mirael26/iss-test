import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionCreator } from "../../store/action";
import { PhoneProperties, State } from "../../types";

interface ReplaceProps {
  className: string,
  id: number,
}

const Replace = ({className = "", id}: ReplaceProps): JSX.Element => {
  const phones = useSelector((state: State) => state.phones) as Array<PhoneProperties>;
  const displayedPhones = useSelector((state: State) => state.displayedPhones) as Array<PhoneProperties>;
  const dispatch = useDispatch();


  const undisplayedPhones = phones.filter(phone => {
    return !displayedPhones.find(displayedPhone => phone.id === displayedPhone.id);
  })

  const replacePhones = (evt: React.SyntheticEvent): void => {
    const element = evt.target as Element;
    const index = displayedPhones.findIndex(element => element.id === id);
    const updatedPhones = displayedPhones.slice();
    updatedPhones[index] = phones.find(phone => phone.id === Number(element.id));

    dispatch(ActionCreator.updateDisplayedPhones(updatedPhones));
  }

  return (
    <div className={`replace ${className}`}>
      <input className="replace__search-input" type="text" placeholder="Поиск"/>
      <ul className="replace__phone-list">

        {undisplayedPhones.map((phone, i) => {
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