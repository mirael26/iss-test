import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ActionCreator } from "../../store/action";
import { PhoneProperties, State } from "../../types";
import { Header, TableHeaders } from "../../const";

import Phone from "../phone/phone";

const updatePhones = (phones: Array<PhoneProperties>, displayedPhones: Array<PhoneProperties>, amount: number): Array<PhoneProperties> => {
  if (displayedPhones.length >= amount) {
    return displayedPhones.slice(0, amount);
  }
  const newPhones = displayedPhones.slice();
  while (newPhones.length < amount) {
    const addedPhone = phones.find((phone) => !newPhones.includes(phone));
    newPhones.push(addedPhone);
  }
  return newPhones;
};

const ComparisonTable = (): JSX.Element => {
  const phones = useSelector((state: State) => state.phones);
  const amount = useSelector((state: State) => state.phonesAmount);
  const displayedPhones = useSelector((state: State) => state.displayedPhones);
  const dispatch = useDispatch();

  const [differencesOn, setDifferences] = useState(false);

  useEffect (
    () => {
      if (displayedPhones.length === 0) {
        dispatch(ActionCreator.updateDisplayedPhones(phones.slice(0, amount)));
        return;
      }

      dispatch(ActionCreator.updateDisplayedPhones(updatePhones(phones, displayedPhones, amount)));
    }, [amount]
  )
  
  const findDifferentProperties = (properties: Array<Header>): Array<Header> => {
    return properties.filter((property) => {
      const phoneProperties = displayedPhones.map((phone) => phone[property]);
      
      if (new Set(phoneProperties).size >= 2) {
        return true;
      }
      return false;
    });
  };

  const comparedProperties = differencesOn ? findDifferentProperties(Object.keys(TableHeaders) as Array<Header>) : Object.keys(TableHeaders) as Array<Header>;

  return (
    <div className="comparison-table">
      <div className="comparison-table__header">
          <div className="comparison-table__header-cell">
            <button className={`comparison-table__differences-checkbox${differencesOn ? ' checked' : ''}`} onClick={() => setDifferences(!differencesOn)}>
              <p className="comparison-table__differences-checkbox-label">Показать различия</p>
            </button>
          </div>

          {displayedPhones.map((phone, i) => {
            const isLast = (i === (displayedPhones.length - 1)) ? true : false;
            return <div key={`phone-${i}`} className={`comparison-table__cell comparison-table__cell--columns-${amount}`}>
              <Phone isLast={isLast} image={phone.image} name={phone.name} id={phone.id}/>
            </div>
          })}
      </div>

      
      <div className="comparison-table__body">
        {comparedProperties.map((header, i) => {
          return <div key={`row-${i}`} className="comparison-table__row">
            <div className="comparison-table__header-cell">{TableHeaders[header as Header]}</div>

            {displayedPhones.map((phone, i) => {
              const content = typeof phone[header as Header] !== "boolean"
                ? `${phone[header as Header]}${header === "cost" ? " ₽" : ""}`
                : <div className={`comparison-table__boolean-icon comparison-table__boolean-icon--${phone[header as Header]}`}>
                  {phone[header as Header] === true ? "Да" : "Нет"}
                </div>;

              return <div key={`${header}-cell-${i}`} className={`comparison-table__cell comparison-table__cell--columns-${amount}`}>
                {content}
              </div>
            })}
          </div>
        })}
      </div>
    </div>
  );
};

export default ComparisonTable;