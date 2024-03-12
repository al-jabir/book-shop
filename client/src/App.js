import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Update from './components/Update';
import Users from './components/Users';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
