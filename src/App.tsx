import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Frame } from './screens/Frame';
import { ThankYou } from './screens/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/thank-you/" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;