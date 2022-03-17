import React from "react";
import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create"
import ViewPost from "./Pages/ViewPost"
import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./store/Context";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import  Post from "./store/PostContext"
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import Posts from "./Components/Posts/Posts";

function App() {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    const auth = getAuth();
    console.log(user);
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
        <Route element={<Create/>} path="/create" />
        <Route element={<Posts/>} path="/post" />
        <Route element={<ViewPost/>} path="/view" />
      </Routes>
      </Post>
    </div>
  );
}

export default App;
