import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

// import Users from "../user/pages/Users";
// import NewPlace from "../places/pages/NewPlace";
// import UserPlaces from "../places/pages/UserPlaces";
// import UpdatePlace from "../places/pages/UpdatePlace";
// import Auth from "../user/pages/Auth";
import MainNavigation from "../components/Navigation/MainNavigation";
import Footer from "../components/Footer";
import { AuthContext } from "../context/auth-context";
import { useAuth } from "../hooks/auth-hook";
import Spinner from "../components/UI/Spinner";

const Users = React.lazy(() => import("../user/pages/Users"));
const NewPlace = React.lazy(() => import("../places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("../places/pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("../places/pages/UpdatePlace"));
const Auth = React.lazy(() => import("../user/pages/Auth"));

const AppRouter = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token, userId, login, logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <Spinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default AppRouter;
