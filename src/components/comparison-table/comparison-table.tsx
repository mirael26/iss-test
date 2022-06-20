import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ActionCreator } from "../../store/action";
import { State } from "../../types";
import { Header, TableHeaders } from "../../const";

import Phone from "../phone/phone";



const ComparisonTable = (): JSX.Element => {
  const phones = useSelector((state: State) => state.phones);
  const amount = useSelector((state: State) => state.phonesAmount);
  const displayedPhones = useSelector((state: State) => state.displayedPhones);
  const dispatch = useDispatch();

  useEffect(
    () => {      
      dispatch(ActionCreator.updateDisplayedPhones(phones.slice(0, amount)));
    }, []
  )

  return (
    <div className="comparison-table">
      <div className="comparison-table__header">
          <div className="comparison-table__header-cell">
            <div className="comparison-table__differences-checkbox-container">
              <label className="comparison-table__differences-checkbox-label">
                Показать различия
                <input className="comparison-table__differences-checkbox" type="checkbox"/>
              </label>
            </div>
          </div>

          {displayedPhones.map((phone, i) => {
            const isLast = (i === (displayedPhones.length - 1)) ? true : false;
            return <div key={`phone-${i}`} className={`comparison-table__cell comparison-table__cell--columns-${amount}`}>
              <Phone isLast={isLast} image={phone.image} name={phone.name} />
            </div>
          })}
      </div>

      
      <div className="comparison-table__body">
        {Object.keys(TableHeaders).map((header, i) => {
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