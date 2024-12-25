import React from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import AboutSection from "./AboutSection";
import SpecializationSection from "./SpecializationSection";
import AppointmentSection from "./AppointmentSection";
import ReviewsSection from "./ReviewsSection";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../App.css"; // Custom styles for colors and fine-tuning
function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <ProfileCard />
            <AboutSection />
            <SpecializationSection />
          </div>
          <div className="col-lg-4">
            <AppointmentSection />
          </div>
        </div>
        <ReviewsSection />
      </main>
    </div>
  );
}

export default App;
