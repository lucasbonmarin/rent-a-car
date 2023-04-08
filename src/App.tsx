import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehiclesPage from './pages/VehiclesPage/VehiclesPage';
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
import OurTeamPage from "./pages/OurTeamPage/OurTeamPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/vehicle-models' element={<VehiclesPage />} />
        <Route path='/testimonials' element={<TestimonialsPage />} />
        <Route path='/our-team' element={<OurTeamPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
