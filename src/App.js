import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavAndLayout from "./components/navigation-and-layout/nav-and-layout";
// import NavAndLayout from "./components/navigation-and-layout/navigation-and-layout";
import './App.css';

export default function App() {
  return (
    <div id="app">
      <Router>
        <NavAndLayout />
      </Router>
    </div>
  );
}