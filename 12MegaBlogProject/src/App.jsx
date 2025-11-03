import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import {Header, Footer} from './components/index';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  /* We'll first make loading state, in which if data is being fetched then we will show loading spinner, otherwise show data. */
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getAccount()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false));
  }, []);
  
  // Conditional rendering based on loading state(if-else or ternary)
  return !loading ? 
  <div className='min-h-screen flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  </div> 
  : null 
}

export default App
