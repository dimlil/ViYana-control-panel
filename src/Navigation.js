import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
