import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import "./styles/nav.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Skills">
              <Skills />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
