import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import Carousel from "./components/Carousel/Carousel";
import Login from "./components/Login";
import { authenticate } from "./auth/authenticate";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Carousel />
      <Content />
    </div>
  );
};

export default authenticate(App)(Login);
