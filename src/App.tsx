import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VoucherDetails from './pages/VoucherDetails';
import AboutUs from './pages/AboutUs';
import PolicyAgreements from './pages/PolicyAgreements';
import ContactUs from './pages/ContactUs';
import ProviderPage from './pages/ProviderPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B1220] transition-colors duration-500 font-sans text-[#0B1A3A] dark:text-[#E5E7EB]">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vouchers/:slug" element={<VoucherDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/policy" element={<PolicyAgreements />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/:providerSlug" element={<ProviderPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
