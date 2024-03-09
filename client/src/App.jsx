import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";

import TheHeader from "./components/layout/header/TheHeader";
import Footer from "./components/layout/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <TheHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
