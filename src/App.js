 import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";
import AppContext from "./contexts/AppContext";
import MainDashboard from './pages/MainDashboard';
import LogIn from './components/LogIn';
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
  const [userName, setUserName] = useState(null);
  const [ selectedRoomID, setSelectedRoomID ] = useState(null);
  console.log(userName);
  return (
    <AppContext.Provider value={{ userName, setUserName, selectedRoomID, setSelectedRoomID }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
             userName?
             <MainDashboard />
             :
             <LogIn />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
