import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StrimList";
const App = () => {
  return (
    <div className="ui container">
      {/* <GoogleOAuthProvider clientId="7835632785-unq4m2g4v7fc4ml0lau7pnjlt6m0qb4j.apps.googleusercontent.com"> */}
      {/* </GoogleOAuthProvider> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit" element={<StreamEdit />} />
          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/show" element={<StreamShow />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
