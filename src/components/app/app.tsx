import * as React from "react";

import Header from "../header/header";
import ComparisonPage from "../comparison-page/comparison-page";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header></Header>
      <ComparisonPage></ComparisonPage>
    </div>
  );
};

export default App;