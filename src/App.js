import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from './Components/Navbar'
import CustomNavbar from './Components/Navbar'
import { Link, Route, Routes, Navigate } from "react-router-dom";
import HowToUse from './pages/HowToUse'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import User from './pages/User'
import Adminpanel from './pages/Adminpanel'
import Userpanel from './pages/users/Userpanel'
import Dashboard from './pages/Dashboard'
import ExamContent from '../src/Components/Exam/ExamContent'
import { useLocation } from 'react-router-dom';


// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

function App() {

  const location = useLocation();
console.log(location);
  return (
    <>
{/* if auth */}
{location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/HowToUse' element={<HowToUse />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Adminpanel' element={<Adminpanel />} />
        <Route path='/ExamContent' element={<ExamContent />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/User' element={<Userpanel/>} />
      </Routes>
    </>
  );
}

export default App;
