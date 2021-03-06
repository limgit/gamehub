import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Lobby from '@client/pages/lobby';

import { KEY_USERNAME, KEY_USERID } from '@client/consts';
import { getLocalValue } from '@client/storage';

function Main() {
  const username = getLocalValue<string>(KEY_USERNAME);
  const userId = getLocalValue<string>(KEY_USERID);

  if (username === undefined || userId === undefined) {
    // Redirect back to home if username or userId is not set
    return (
      <Navigate to="/" replace />
    );
  }

  return (
    <Routes>
      <Route path="/lobby" element={<Lobby username={username} />} />
    </Routes>
  );
}

export default Main;
