import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import AllPosts from "./Pages/AllPosts/AllPosts";
import CreatePage from "./Pages/CreatePage/CreatePage";
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
          <Route path="/create" element={<CreatePage />} />
          <Route path="/allPosts" element={<AllPosts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
