import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DonationForm from "./components/DonationForm";
import AboutHopeFoundation from "./Components/AboutHope"; // Keep this as it is
import OurProjects from "./components/OurProjects";
import FounderProfile from "./components/FounderProfile";
import FooterComponent from "./components/FooterComponent";
import Blog from "./Pages/Blog";

// Import the About component properly
import AboutPage from "./Pages/About";  // Assuming you have an AboutPage component

import Contact from "./Pages/Contact"; // Assuming you have a Contact component
import Donate from "./pages/Donate";

// Projects Page Component
const ProjectsPage = () => (
  <div className="py-10">
    <OurProjects />
  </div>
);

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <DonationForm />
    <AboutHopeFoundation />
    <OurProjects />
    <FounderProfile />
  </>
);

const App = () => {
  return (
    <BrowserRouter>

      {/* Common Layout */}
      <Header />
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* PROJECTS */}
        <Route path="/projects" element={<ProjectsPage />} />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<AboutPage />} /> {/* Now using AboutPage */}

        <Route path="/blog" element={<Blog />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        <Route path="/donate" element={<Donate />} />
      </Routes>

      {/* FOOTER (always visible) */}
      <FooterComponent />
      
    </BrowserRouter>
  );
};

export default App;