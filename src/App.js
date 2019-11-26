import React, { Suspense } from "react";
import "./App.css";

import { fetchData } from "./Api";

const resource = fetchData();

const App = () => (
  <div className="container my-5">
    <h1>Hello World</h1>
  </div>
);

const ProfileDetails = () => {
  const user = resource.user.read();
  return (
    <div className="card card-body my-3">
      <h1 className="large text-primary">{user.name}</h1>
      <ul>
        <li>Username: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.address.city}</li>
      </ul>
    </div>
  );
};

export default App;
