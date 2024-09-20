import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Moon from './pages/Destination/Moon';
import Commander from './pages/Crew/Commander';
import Vehicle from './pages/Technology/Vehicle';
import Mars from './pages/Destination/Mars';
import Europa from './pages/Destination/Europa';
import Titan from './pages/Destination/Titan';
import Specialist from './pages/Crew/Specialist';
import Pilot from './pages/Crew/Pilot';
import Engineer from './pages/Crew/Engineer';
import Spaceport from './pages/Technology/Spaceport';
import Capsule from './pages/Technology/Capsule';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Moon />} />
        <Route path="/Crew" element={<Commander />} />
        <Route path="/Technology" element={<Vehicle />} />
        <Route path="/Destination/Mars" element={<Mars />} />
        <Route path="/Destination/Europa" element={<Europa />} />
        <Route path="/Destination/Titan" element={<Titan />} />
        <Route path="/Crew/Specialist" element={<Specialist />} />
        <Route path="/Crew/Pilot" element={<Pilot />} />
        <Route path="/Crew/Engineer" element={<Engineer />} />
        <Route path="/Technology/Spaceport" element={<Spaceport />} />
        <Route path="/Technology/Capsule" element={<Capsule />} />
      </Routes>
    </div>
  );
}

export default App;
