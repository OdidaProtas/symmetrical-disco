import DashLoading from "../pages/DashLoading";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DataTable from "./DataTable";
import Drawer from "./Drawer";
import Filters from "./Filters";
import Home from "./Home";
import AppDetail from "../pages/AppDetial";

export default function Dashboard() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Drawer>
        <Switch>
          <Route exact path={`${path}`}>
            <DashLoading />
          </Route>
          <Route exact path={`${path}/Lab`}>
            <AppDetail />
          </Route>
          <Route exact path={`${path}/:id`}>
            <Filters />
            <DataTable />
          </Route>
        </Switch>
      </Drawer>
    </div>
  );
}
