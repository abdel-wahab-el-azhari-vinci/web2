import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import CinemaPage from './components/CinemaPage/cinemaPage.tsx';
import HomePage from './HomePage/homePage.tsx';
import MovieListPage from './components/MovieListPage/movieListPage.tsx';
import App from './components/App/index.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<HomePage />
      },
      {
        path:"cinemaPage",
        element:<CinemaPage/>
      },

      {
        path:"movieListePage",
        element:<MovieListPage/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
