import * as React from "react";

import Phone from "../phone/phone";

const ComparisonTable = (): JSX.Element => {
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
          <div className="comparison-table__cell comparison-table__cell--columns-3">
            <Phone/>
          </div>
          <div className="comparison-table__cell comparison-table__cell--columns-3">
            <Phone/>
          </div>
          <div className="comparison-table__cell comparison-table__cell--columns-3">
            <Phone/>
          </div>
      </div>
      
      <div className="comparison-table__body">
        <div className="comparison-table__row">
          <div className="comparison-table__header-cell">Производитель</div>
          <div className="comparison-table__cell comparison-table__cell--columns-3">Apple</div>
          <div className="comparison-table__cell comparison-table__cell--columns-3">Xiaomi</div>
          <div className="comparison-table__cell comparison-table__cell--columns-3">Samsung</div>
        </div>

        <div className="comparison-table__row">
          <div className="comparison-table__header-cell">Частота обновления экрана</div>
          <div className="comparison-table__cell comparison-table__cell--columns-3">Apple</div>
          <div className="comparison-table__cell comparison-table__cell--columns-3">Xiaomi</div>
          <div className="comparison-table__cell comparison-table__cell--columns-3">Samsung</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;