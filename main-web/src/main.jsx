import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EventsPage from './pages/EventsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Layout from './Layout/Layout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<LandingPage />} />
      <Route path='/about' element={<AboutPage/>} />
      {/* <Route path='/team' element={<TeamPage/>} /> */}
      {/* <Route path='/contact' element={<ContactPage/>} /> */}
      {/* <Route path='/cart' element={<CartPage/>} /> */}
      <Route path='/events' element={<EventsPage />} />
      <Route path='*' element={<NotFoundPage/>} />


      {/* <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/pay' element={<PaymentPage/>} />
      <Route path='/cart' element={<CartPage/>} />


      </Route>
      <Route element={<RestrictedRoute/>}>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
      </Route> */}
 
    </Route>
    
 
  )
);

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

    // <App />
)
