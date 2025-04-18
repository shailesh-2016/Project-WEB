import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Home from './components/Home';
import Footer from './Layout/Footer';
import Course from './components/Course';
import CourseDetail from './components/CourseDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Course />
          </>
        } />
        <Route path="/detail" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
