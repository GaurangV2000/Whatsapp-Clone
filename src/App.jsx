import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chats from "./Chats";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app_body">
          <BrowserRouter>
            <Routes>
              <Route
                path="/app"
                element={
                  <>
                    <Sidebar />
                    <Chats />
                  </>
                }
              />
              <Route path="/" element={<h1>Home Screen</h1>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
