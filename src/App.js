import React from "react";
import { Routes, Route } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favaroite from "./pages/Favaroite";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetup />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favaroite" element={<Favaroite />} />
      </Routes>
    </Layout>
  );
}

export default App;
