import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './about';
import Courses from './Courses';
import Staff from './staff';
import Contact from './contact' 
import Blog from './blog'
const routerss = createBrowserRouter([
  { path: '/', element: <App /> }, { path: '/about', element: <About /> }, { path: '/courses', element: <Courses /> }, { path: '/staff', element: <Staff /> }, { path: '/contact', element: <Contact /> }, { path: '/blog', element: < Blog /> }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <RouterProvider router={routerss} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
