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
    for (let i = 2; i <= phones.length && i <= 6; i++) {
      buttons.push(i);
    }
  }

  const onButtonClick = (evt: React.SyntheticEvent): void => {
    const element = evt.target as Element;
    if (Number(element.textContent) === amount) {
      return;
    }
    dispatch(ActionCreator.changePhonesAmount(Number(element.textContent)))
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