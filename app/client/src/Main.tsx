import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Test from '@client/pages/test';

import { KEY_USERNAME } from '@client/consts';
import { getLocalValue } from '@client/storage';

function Main() {
  const username = getLocalValue<string>(KEY_USERNAME);

  if (username === undefined) {
    // Redirect back to home if username is not set
    return (
      <Navigate to="/" replace />
    );
  }

  return (
    <Routes>
      <Route path="/test" element={<Test username={username} />} />
    </Routes>
  );
}

export default Main;
