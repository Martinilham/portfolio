import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import "animate.css"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Page/home';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

