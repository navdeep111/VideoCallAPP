import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css'
import VideoPage from './Components/VideoPage';
import HomePage from './Components/HomePage';

function App() {
  const router =createBrowserRouter([
    {
    path:"/",
    element:<HomePage/>
    },
    {
      path:"/room/:id",
      element:<VideoPage/>

    }
])

  return (
    <div className='App'>
    <RouterProvider router={router}/> 
    </div>
  )
}

export default App
