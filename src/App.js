import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="General"
                pageSize={5}
                country="us"
                category="General"
              />
            }
          />
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Business"
                pageSize={5}
                country="us"
                category="Business"
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Entertainment"
                pageSize={5}
                country="us"
                category="Entertainment"
              />
            }
          />
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="General"
                pageSize={5}
                country="us"
                category="General"
              />
            }
          />
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Health"
                pageSize={5}
                country="us"
                category="Health"
              />
            }
          />
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Science"
                pageSize={5}
                country="us"
                category="Science"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Sport"
                pageSize={5}
                country="us"
                category="Sports"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Technology"
                pageSize={5}
                country="us"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
