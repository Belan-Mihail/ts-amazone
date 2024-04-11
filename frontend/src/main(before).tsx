import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import axios from 'axios'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path='product/:slug' element={<ProductPage />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)


//4 import bootstrap, delete App.css and clear index.css then go to app.tsx
//5 import picking a router and edit main.tsx. then create HomePage and put code from <main></main>
//7 <Route index={true} element={<HomePage />} /> then add outlet to app.tsx
//8 create Product pge and add route. then home page

//19 add base url and install npm i --save-dev @types/node and go HomePage.tsx
