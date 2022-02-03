import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCompunents from './routes/AllCompunents';
import Login from './admin/login'
import Page404 from './components/Page404';
import Dashboard from './admin/Dashboard';
import ProjectUpload from './admin/admin_compunents/projectUpload';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllCompunents />} />
        <Route path="/_myAdmin" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/dashboard/projectsUpload" exact element={<ProjectUpload />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
