import { createBrowserRouter, createRoutesFromElements,RouterProvider , Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import News from './Pages/News'
import OurWork from './Pages/OurWork'
import RootLayout from './Pages/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Home/>}/>
      <Route path='/OurWork' element={<OurWork/>}/>
      <Route path='/News' element={<News/>}/>
      
    </Route>
  )
)


function App() {
  return <RouterProvider router={router}/>
}

export default App;
