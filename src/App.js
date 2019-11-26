import React, { Suspense } from "react";
import "./App.css";

import { fetchData } from "./Api";

const resource = fetchData();

const App = () => (
  <div className="container my-5">
    <h1>Hello World</h1>
  </div>
);

export default App;
