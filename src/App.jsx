import { createBrowserRouter, createRoutesFromElements,RouterProvider , Route} from 'react-router-dom'
import './App.css'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import News from './Pages/News'
import NewsArticle from './Pages/NewsArticle'
import OurWork from './Pages/OurWork'
import RootLayout from './Pages/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Home/>}/>
      <Route path='/OurWork' element={<OurWork/>}/>
      <Route path='/News' element={<News/>}/>
      <Route path='/News/:articleid' element={<NewsArticle/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Route>
  )
)


function App() {
  return <RouterProvider router={router}/>
}

export default App;
