import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCompunents from './routes/AllCompunents';
import Login from './admin/login'
import Page404 from './components/Page404';
import Dashboard from './admin/Dashboard';
import ProjectUpload from './admin/admin_compunents/projectUpload';
import AdminContact from './admin/admin_compunents/contact';

function App() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 123) {
      event.preventDefault();
    }
    if (event.keyCode === 74) {
      event.preventDefault();

    }
    if (event.ctrlKey) {
      event.preventDefault();
    }


  });
  return (
    <>

      <Routes>
        <Route path="/" element={<AllCompunents />} />
        <Route path="/myadminlogin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/projectsUpload" element={<ProjectUpload />} />
        <Route path="/dashboard/contact" element={<AdminContact />} />
        <Route path="/dashboard/contact/:id" element={<AdminContact />} />
        <Route path="*" exact element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
