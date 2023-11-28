import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs.jsx';
import Profile from './pages/Profile.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HostPage from './pages/HostPage.jsx';
import JoinPage from './pages/JoinPage.jsx';
import Tournament from './pages/JoinTournament.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/aboutUs',
        element: <AboutUs />
      }, {
        path: '/profile/:username',
        element: <Profile />
      },
      {
        path: '/me',
        element: <Profile />
      },
      {
        path: '/host',
        element: <HostPage />
      },
      {
        path: '/join',
        element: <JoinPage />
      },
      {
        path:'/join/tournaments/:id',
        element:<Tournament/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

