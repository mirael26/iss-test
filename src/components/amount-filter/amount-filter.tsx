import * as React from "react";

const AmountFilter = (): JSX.Element => {
  return (
    <div className="amount-filter">
      <p className="amount-filter__text">Отобразить товары:</p>
      <button className="amount-filter__button">2</button>
      <button className="amount-filter__button active">3</button>
      <button className="amount-filter__button">4</button>
      <button className="amount-filter__button">5</button>
      <button className="amount-filter__button">6</button>
    </div>
  );
};

export default AmountFilter;