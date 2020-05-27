import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ParticleComponent from "./components/Particle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import PostList from "./components/PostList";
import AppNav from "./components/AppNav";
import "./App.css";

// import { Route, Switch } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import Landing from "./components/Landing";

function App() {
  // return (
    // <div className="overall">
    //   <AppNav />
    //   <Switch>
    //     <ParticleComponent />
    //     <div>
    //       <Route exact path="/home" component={Landing} />
    //       <Route exact path="/" component={PostList} />
    //       <Route exact path="/:postID/" component={PostDetail} />
    //     </div>
    //   </Switch>
    // </div>
    // );


    return (
      <Router>
        <AppNav />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "98%",
            backgroundColor: '#15202b',
            border: '1px solid black',
            marginTop: '3rem'
          }}
        >
          <ParticleComponent />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
            {/* You can render <Route> and <NavTabs /> here */}
            <Route exact path='/' component={PostList} />
            <Route exact path="/home" component={Landing} />
            <Route exact path="/:postID/" component={PostDetail} />
          </div>
        </div>
      </Router>
    );
}

export default App;
