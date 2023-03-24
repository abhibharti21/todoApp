import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import Input from "./Components/Input";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Input />
        <TodoList />
      </Router>
    </div>
  );
}

export default App;
