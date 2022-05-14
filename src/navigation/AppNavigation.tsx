import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="**">Resource not found</Route>
      </Switch>
    </Router>
  );
}
