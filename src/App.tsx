import React from 'react';
import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import ProfilePage from "./pages/Profile";
import SettingsPage from "./pages/Settings";
import { ProtectedLayout } from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedLayout />
        }
      />

    </Routes>
    </BrowserRouter>
  );
}

