import React from "react";
import HomePage from "./components/Homepage";
import FindDoctorsPage from "./components/FindDoctorsPage";  

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Custom styles for colors and fine-tuning
function App() {
  return (
      <BrowserRouter>
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/find-doctors" element={<FindDoctorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
