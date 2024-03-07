import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
//   <BrowserRouter basename="/daly" >
import Home from './views/Home';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
