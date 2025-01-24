import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ErrorPage from './pages/ErrorPage';


const routes = [
  {
    path:'/',
    element:<HomePage/>,
  },
  {
    path:'/about',
    element:<AboutPage/>,
  },
  {
    path:'/list',
    element:<ArticlesList/>,
  },
  {
    path:'/error',
    element:<ErrorPage/>,
  },
 
]
const router = createBrowserRouter(routes);


function App() {
  
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
