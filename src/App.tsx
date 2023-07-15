import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Blog from './pages/Blog';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import PlaceView from './pages/PlaceView';
import CityView from './pages/CityView';
import PrivacyPolicy from './pages/PolicyPrivacy';
import Header from './components/Header';
import Destination from './pages/Destination';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/:place" element={<PlaceView />} />
                    <Route path="/:city" element={<CityView />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;