import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import Test from './components/Test';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/test/:categoryId" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
