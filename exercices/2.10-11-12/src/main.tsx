import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import CinemaPage from './components/CinemaPage/cinemaPage.tsx';
import {HomePage,MoviePage} from './HomePage/homePage.tsx';
import MovieListPage from './components/MovieListPage/movieListPage.tsx';
import App from './components/App/index.tsx';
import AddMoviePage from './components/MovieListPage/addMovies.tsx';

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
         path:"movies/:movieId",
         element:<MoviePage />
      },
      {
        path:"cinemaPage",
        element:<CinemaPage/>
      },

      {
        path:"movieListePage",
        element:<MovieListPage/>
      },{
        path:"addMovie",
        element:<AddMoviePage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
