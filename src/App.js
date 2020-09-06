import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Summ from "./Example.js";
import { multiply, sayHello } from "./Example.js";
import DateAndTime from "./Moment.js";
import Person from "./Person.js";
import Product from "./Product.js";

function App() {
  console.log(Summ(2, 4));
  console.log(multiply(2, 5));
  console.log(sayHello());

  return (
    <div className="App">
      <header className="App-header">
        <Product name="orange" price="$4" description="Fresh oranges" />
        <Person name="Anna" />
        <DateAndTime />
        <h1>This is our first project</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person />
      </header>
    </div>
  );
}

export default App;
