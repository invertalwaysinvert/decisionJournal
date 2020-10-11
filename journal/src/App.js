import React from "react";
import "./App.css";
import logo from "./static/fair_decision.png";

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./fontawesome.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="main-title">
        <img src={logo} className="App-logo" />
        <button className="button is-dark is-medium">
          <span>Get Started</span>
        </button>
      </div>
    );
  }
}

export default App;
