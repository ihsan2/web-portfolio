import React, { Component } from "react";
// import ReactGA from "react-ga";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
