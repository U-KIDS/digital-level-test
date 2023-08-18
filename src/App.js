import Main from "./main/Main";
import Test from './test/Test';
import Result from "./result/Result";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/test/:id' element={<Test />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
