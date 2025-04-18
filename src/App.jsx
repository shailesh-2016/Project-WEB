import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./components/Home";
import Footer from "./Layout/Footer";
import Course from "./components/Course";
import CourseDetail from "./components/CourseDetail";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              {/* <Signup></Signup> */}
              <Home />
              <Course />
              <Footer />
            </>
          }
        />
        <Route path="/detail" element={<CourseDetail />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
