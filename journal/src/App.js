import "../node_modules/milligram/dist/milligram.css";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="homepage row">
      <div className="column column-20">
        <div className="title">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="column">
        <div className="content">
          <a href="/asdf" className="button button-black">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
