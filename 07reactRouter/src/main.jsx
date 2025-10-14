import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { gitInfoLoader } from './components/Github/Github'

// For creating routers there are two approaches:
// 1. Using createBrowserRouter with an array of route objects
/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]) */

// 2. Using createRoutesFromElements with JSX route elements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact-us' element= {<Contact />} />
      <Route path='user/:userId' element= {<User />} />
      <Route
      loader= {gitInfoLoader} // Using concept of loader
      path='github' 
      element= {<Github />} 
      />
    </Route>
  )
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
