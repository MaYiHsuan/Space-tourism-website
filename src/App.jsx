import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';
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
    <Router>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/Destination" exact element={<Destination />} />
        <Route path="/Crew" exact element={<Crew />} />
        <Route path="/Technology" exact element={<Technology />} />
        <Route path="/Destination/Mars" element={<Mars />} />
        <Route path="/Destination/Europa" element={<Europa />} />
        <Route path="/Destination/Titan" element={<Titan />} />
        <Route path="/Crew/Specialist" element={<Specialist />} />
        <Route path="/Crew/Pilot" element={<Pilot />} />
        <Route path="/Crew/Engineer" element={<Engineer />} />
        <Route path="/Technology/Spaceport" element={<Spaceport />} />
        <Route path="/Technology/Capsule" element={<Capsule />} />
      </Switch>
    </Router>
    </div>
  );
}

export default App ;
