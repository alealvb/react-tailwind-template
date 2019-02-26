import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <Card />
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
