import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Main from './components/Main';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/SignUp/`} element={<SignUp />} />
          <Route path={`SignIn`} element={<SignIn />} />
          <Route path={`/`} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
