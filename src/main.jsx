import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import OrderReview from './components/OrderReview/OrderReview.jsx'
import Grandpa from './components/Grandpa/Grandpa.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'


const router = createBrowserRouter ([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:() => fetch('tshirts.json')
      },
      {
        path:'/review',
        element:<OrderReview/>
      },
      { 
        path: '/grandpa',
        element:<Grandpa/>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
