// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import components
import Home from "./components/Home";
import ImprintPage from "./components/Imprint";
import DataPrivacyPage from "./components/DataPrivacy";

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

          {/* This route is for data privacy component
          with exact path "/dataprivacy", in 
          component props we passes the imported component*/}
          <Route path="/dataprivacy" component={DataPrivacyPage} />

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
