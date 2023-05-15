import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./Card";
import "./App.css";

function App() {
  const name = "Chase";

  return (
    <>
      <div>
        <h1>Hello {name}</h1>
        <p id="find-me">Hope you are well {name}</p>
        <Card />
      </div>
    </>
  );
}

export default App;
