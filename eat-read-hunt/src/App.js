// Daler's App imports
import React from 'react';
import Navbar from './components/Daler/Navbar';
import NavbarModal from './components/Homepage/NavbarModal';
// import HomePage from './components/Homepage/HomePage';
// import MySavedJobs from './components/Daler/MySavedJobs';
// ===========================================================

// Aleh's App imports
import AlehApp from './components/Aleh/App';
//=============================================================

// Aparna's App imports
import AparnaApp from './components/Aparna/App';

function App() {
  return (
    <div className="">
      <NavbarModal />
      {/* <MySavedJobs /> */}
      {/* <HomePage /> */}
      <Navbar />

      {/* Aleh's App */}
      {/* <AlehApp /> */}

      {/* Aparna's App */}
      {/* <AparnaApp /> */}
    </div>
  );
}

export default App;
