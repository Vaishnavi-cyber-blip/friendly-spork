
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage'; // Import HomePage component
import Try2 from './components/Try2';
import Image from './components/Image';
import Facts2 from './components/Facts2'; 
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage is the default route */}
        <Route path="/try-toy" element={<Try2 />} /> {/* Try2 route */}
        <Route path="/toy-image" element={<Image />} /> 
        <Route path="/facts" element={<Facts2 />} /> 
        <Route path="/chat" element={<Chat />} /> 

      </Routes>
    </Router>
  );
}

export default App;

