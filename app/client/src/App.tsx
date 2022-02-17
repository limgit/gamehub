import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '@client/Main';
import Home from '@client/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Main />} />
    </Routes>
  )
}

export default App;
