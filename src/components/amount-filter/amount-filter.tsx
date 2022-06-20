import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../store/action";

import { State } from "../../types";

const AmountFilter = (): JSX.Element => {
  const phones = useSelector((state: State) => state.phones);
  const amount = useSelector((state: State) => state.phonesAmount);
  const dispatch = useDispatch();

  const buttons: Array<number> = [];

  if (phones.length > 1) {
    for (let i = 2; i <= phones.length; i++) {
      buttons.push(i);
    }
  }

  const onButtonClick = (evt: any) => {
    if (evt.target.textContent === amount) {
      return;
    }
    dispatch(ActionCreator.changePhonesAmount(Number(evt.target.textContent)))
  }
  
  return (
    phones.length > 1 
      ? <div className="amount-filter">
      <p className="amount-filter__text">Отобразить товары:</p>

      {buttons.map((button, i) => {
        return <button key={`button-${i}`}
          className={`amount-filter__button${button === amount ? " active" : ""}`}
          disabled={button === amount}
          onClick={(evt) => onButtonClick(evt)}>{button}</button>
      })}
      </div>
      : <div></div>
  );
};

export default AmountFilter;