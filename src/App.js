import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContext from "./contexts/AppContext";
import LogIn from "./components/LogIn";
import ChatRoom from './components/ChatRoom'
import NotFound from "./pages/NotFound";
import SideBar from "./components/SideBar";

import './App.css';

function App() {
  const [ userName, setUserName ] = useState(null);

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/room/:id" element={<ChatRoom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
