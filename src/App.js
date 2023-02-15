import React from "react";
import { Routes, Route,  } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favaroite from "./pages/Favaroite";
import MainNavigation from "./layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetup />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favaroite" element={<Favaroite />} />
      </Routes>
    </div>
  );
}

export default App;
