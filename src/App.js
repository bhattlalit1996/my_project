import React from "react";
import {Provider} from "react-redux";
import store from "./component/store";
import './App.css';
import Container from "./component/Container";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Container />
    </div>
    </Provider>
  );
}

export default App;
