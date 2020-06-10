import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./Register";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <div className="h-full p-8 mx-auto items-center max-w-screen-lg flex flex-col">
      <h1 className="font-bold text-2xl mb-6">the Mindfulness App</h1>
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
