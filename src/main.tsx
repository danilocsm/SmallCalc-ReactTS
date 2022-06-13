import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";

import './global.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
