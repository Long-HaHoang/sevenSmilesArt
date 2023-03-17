// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import components
import Home from "./pages/Home";
import ImprintPage from "./pages/Imprint";
import DataPrivacyPage from "./pages/DataPrivacy";
import PortfolioPage from "./pages/Portfolio";
import LinkTreePage from "./pages/LinkTree";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />

          <Route path="/imprint" component={ImprintPage} />
          <Route path="/dataprivacy" component={DataPrivacyPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/linktree" component={LinkTreePage} />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
