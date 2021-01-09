import logo from "./logo.png";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="">
        <div className="title">
          <img src={logo} alt="logo" id="logo" />
        </div>
      </div>
      <div className="">
        <div className="content">
          <Link to="/home">
            <button className="">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
