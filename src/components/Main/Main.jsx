import { Suspense } from "react";
import { Switch, Route } from "react-router";
import mainRoutes from "../../routes/mainRoutes";
import Spinner from "../Spinner/Spinner";

const Main = () => {
  return (
    <main className="container">
      <Suspense fallback={<Spinner />}>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.name}
            />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
