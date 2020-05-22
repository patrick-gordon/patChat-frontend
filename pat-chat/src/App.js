import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import PostList from "./components/PostList";
import AppNav from "./components/AppNav";

import { Route, Switch } from "react-router-dom";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="App">
      <AppNav />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/:postID/" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
