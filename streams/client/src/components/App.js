import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  const PageOne = () => {
    return (
      <div>
        Page one
        <Link to={"/pagetwo"}>Navigate to page two</Link>
      </div>
    );
  };
  const PageTwo = () => {
    return (
      <div>
        Page Two
        <Link to={"/"}>Navigate to home page</Link>
      </div>
    );
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
