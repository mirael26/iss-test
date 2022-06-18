import * as React from "react";

import AmountFilter from "../amount-filter/amount-filter";
import ComparisonTable from "../comparison-table/comparison-table";

const ComparisonPage = (): JSX.Element => {
  return (
    <div className="comparison-page">
      <div className="comparison-page__header">
        <h2 className="comparison-page__title">Смартфоны</h2>
        <AmountFilter></AmountFilter>
      </div>
      <ComparisonTable></ComparisonTable>
    </div>
  );
};

export default ComparisonPage;