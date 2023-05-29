import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LectureProvider } from './contexts/LectureContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoLectureList from './pages/VideoLectureList';
import VideoLectureDetail from './pages/VideoLectureDetail';
import About from './pages/About';

const App = () => {
    return (
        <LectureProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lectures" element={<VideoLectureList />} />
                    <Route path="/lectures/:id" element={<VideoLectureDetail />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </LectureProvider>
    );
}

export default App;
