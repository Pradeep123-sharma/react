import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Login, Protected} from './components/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        /* To yaha par important yhi hai ki hum components ko kaise render karwa rhe hai. Pehle humne to 'authlayout' mei wrap kar diya aur kyunki login mei to authentication chahiye nhi hota hai to isliye humne false likha hai. */
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Protected authentication = {true}>
            {" "}
            <AllPosts />
          </Protected>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Protected authentication={true}>
            {" "}
            <AddPost />
          </Protected>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authentication={true}>
            {" "}
            <EditPost />
          </Protected>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
