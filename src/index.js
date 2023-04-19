import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "semantic-ui-css/semantic.min.css";
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    )
  },
  {
    path: "/login",
    element: (
      <Login />
    )
  },
  {
    path: "/register",
    element: (
      <Register />
    )
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
