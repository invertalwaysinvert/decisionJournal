import "../node_modules/milligram/dist/milligram.css";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/home" component={Dashboard} />
    </Switch>
  );
}

export default App;
