import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar'; 
import TagsPage from './components/TagsPage'; // Import TagsPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tags" element={<TagsPage />} /> {/* Add TagsPage Route */}
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



