import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Galery from "./pages/galery";
import Blog from "./pages/blog";
import NotFound from "./pages/notfound";
import Intro from "./components/intro/intro";
import Nav from "./components/nav/nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [introPopUp, setIntroPopUp] = useState(false);

  useEffect(() => {
    const introTimeOut1 = setTimeout(() => {
      setIntroPopUp(true);
    }, 1000);
    const introTimeOut2 = setTimeout(() => {
      setIntroPopUp(false);
    }, 6000);
    return () => {
      clearTimeout(introTimeOut1);
      clearTimeout(introTimeOut2);
    };
  }, []);

  return (
    <div className="app">
      <div className="container">
        {/* KĀ UZTAISĪT, LAI ŠIS INTRO S*DS PĒC LOADINGA RĀDĀS, JA NEGRIBU TO LIKT home.tsx failā? */}
        {introPopUp && <Intro text="Welcome to best blog ever!" />}
        <div className="row">
          <div className="col-12">
            <Router>
              <Nav />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/galery">
                  <Galery />
                </Route>
                <Route path="/blog/:id">
                  <Blog />
                </Route>
                <Route path="/">
                  <Redirect to="/404-page" />
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
