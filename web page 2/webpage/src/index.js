import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './about';
import News from './news';
import Contact from './contact';


const routerss = createBrowserRouter([
  { path: '/', element: <App /> }, { path: '/about', element: <About /> }, { path: '/news', element: <News /> }, { path: '/contact', element: <Contact /> }
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
