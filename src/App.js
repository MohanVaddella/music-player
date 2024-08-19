import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopTracks from './pages/TopTracks';
import ForYou from './pages/ForYou';
import Header from './components/Header';
import './styles/Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/top-tracks" element={<TopTracks />} />
        <Route path="/" element={<ForYou />} />
      </Routes>
    </Router>
  );
}

export default App;

