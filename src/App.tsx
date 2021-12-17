import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./components/Profile/UserProfile";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </Layout>
  );
}

export default App;
