import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= COMPONENTS ================= */
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DonationForm from "./components/DonationForm";
import AboutHopeFoundation from "./components/AboutHope"; 
import OurProjects from "./components/OurProjects";
import FounderProfile from "./components/FounderProfile";
import FooterComponent from "./components/FooterComponent";

/* ================= PAGES ================= */
import Blog from "./pages/Blog";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

/* ================= HOME PAGE ================= */
const HomePage = () => (
  <>
    <Hero />
    <DonationForm />
    <AboutHopeFoundation />
    <OurProjects />
    <FounderProfile />
  </>
);

/* ================= PROJECTS PAGE ================= */
const ProjectsPage = () => (
  <div className="py-10">
    <OurProjects />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>

      {/* HEADER + NAVBAR (GLOBAL) */}
      <Header />
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

      {/* FOOTER (GLOBAL) */}
      <FooterComponent />

    </BrowserRouter>
  );
};

export default App;