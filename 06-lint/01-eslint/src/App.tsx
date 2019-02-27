import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const logoOptions = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };
    const title = "こんにちはReact";
    const targets = ["World", "Kanae", "Yukina"];

    return (
      <div className="App">
        <header className="App-header">
          {
            // コメントはこう書く
          }
          <img {...logoOptions} />
          {title && <p>{title}</p>}
          {targets.map(target => (
            <p>Hello, {target}!</p>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
