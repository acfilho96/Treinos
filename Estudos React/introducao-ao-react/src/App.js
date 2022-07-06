import "./App.css";
import React from "react";
import HelloWorldList from "./HelloWorldList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorldList helloWorldProps={helloWorldProps} />
      </header>
    </div>
  );
}

const helloWorldProps = [

  {
    hello: "Hello",
    world: "World",
    date: new Date(),
    style: "um",
  },
  {
    hello: "Olá",
    world: "Mundo",
    date: new Date(),
    style: "dois",
  },
  {
    hello: "World",
    world: "Hello",
    date: new Date(),
    style: "tres",
  },
  {
    hello: "H3ll0",
    world: "W0rld",
    date: new Date(),
    style: "quatro",
  },
  {
    hello: "Hello",
    world: "World",
    date: new Date(),
    style: "cinco",
  },
  {
    hello: "Hello",
    world: "World",
    date: new Date(),
    style: "seis",
  },
  {
    hello: "Hello",
    world: "World",
    date: new Date(),
    style: "sete",
  },
  {
    hello: "Hello",
    world: "World",
    date: new Date(),
    style: "oito",
  },
  {
    hello: "Hello",
    world: "World",
    date: new Date(),
    style: "nove",
  },
  {
    hello: "Hello",
    world: "World",
    date: new Date(),
    style: "dez",
  },
];


export default App;
