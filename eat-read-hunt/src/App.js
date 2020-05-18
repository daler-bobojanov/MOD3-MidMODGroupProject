import React from 'react';
import Navbar from './components/Daler/Navbar';
import NavbarModal from './components/Homepage/NavbarModal';
import HomePage from './components/Homepage/HomePage';

import MySavedJobs from './components/Daler/MySavedJobs';

function App() {
  return (
    <div className="">
      <NavbarModal />
      {/* <MySavedJobs /> */}
      {/* <HomePage /> */}
      <Navbar />
    </div>
  );
}

export default App;
