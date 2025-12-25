import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<AppRouter />} />
    </Routes>
  );
}

export default App;