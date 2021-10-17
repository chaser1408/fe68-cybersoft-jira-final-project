import Login from "containers/shared/Login/Login";
import Signup from "containers/shared/Signup/Signup";
import UserLayout from "layouts/UserLayout";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { userRoutes } from "routes";
import "./App.css";

function App() {
  const renderRoutes = (routes, Layout) => {
    return routes.map((route, index) => {
      const { path, component, exact } = route;
      return (
        <Layout key={index} path={path} component={component} exact={exact} />
      );
    });
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          {renderRoutes(userRoutes, UserLayout)}
          {/* {renderRoutes(taskRoutes, taskLayout)} */}

          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          {/* <Route path="*" component={PageNotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
