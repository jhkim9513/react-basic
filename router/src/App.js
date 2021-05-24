import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Profile from "./components/profile";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        {/* 아래같이 component로 보내는것은 성능상 좋지 않다. */}
        {/* <Route path={["/", "/home"]} exact component={Home} /> */}

        {/* exact=true로 하면 경로가 정확히 일치해야하고 false이면 앞부분만 일치해도 match하게된다 */}
        <Route path={["/", "/home"]} exact>
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
