import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
// import TurfListPage from './pages/TurfListPage';
// import BookingPage from './pages/BookingPage';
// import ProfilePage from './pages/ProfilePage';
// import NotFoundPage from './pages/NotFoundPage';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/turf-list" element={<TurfListPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
