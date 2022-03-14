import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import AllPosts from "./Pages/AllPosts/AllPosts";
import CreatePage from "./Pages/CreatePage/CreatePage";
import EditPage from "./Pages/Edit/EditPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PostPage from "./Pages/PostPage/PostPage";
import RouteProtection from "./RouteProtection";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/create"
            element={
              <RouteProtection>
                <CreatePage />
              </RouteProtection>
            }
          />
          <Route
            path="/allPosts"
            element={
              <RouteProtection>
                <AllPosts />
              </RouteProtection>
            }
          />
          <Route
            path="/posts/:id"
            element={
              <RouteProtection>
                <PostPage />
              </RouteProtection>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <RouteProtection>
                <EditPage />
              </RouteProtection>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
