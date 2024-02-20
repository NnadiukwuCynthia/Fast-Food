import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/Styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
],{
  basename: '/FoodVendor'
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
