"Setting up basic routing in App.js using react-router-dom for the homepage and dashboard"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import Dashboard from './components/dashboard';

function App() {
  return (
     <Router>
       <Routes>
	<Route path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
       </Routes>
     </Router>
  );
}

export default App;

