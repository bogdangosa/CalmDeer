import { createBrowserRouter, createRoutesFromElements,RouterProvider , Route, ScrollRestoration} from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/Auxiliary/ScrolltoTop'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import News from './Pages/News'
import NewsArticle from './Pages/NewsArticle'
import OurWork from './Pages/OurWork'
import ProjectPage from './Pages/ProjectPage'
import RootLayout from './Pages/RootLayout'
import Games from './Pages/Games'

import "./fonts/BebasNeue/Commercial/TTF/BebasNeue-Bold.ttf";
import "./fonts/BebasNeue/Commercial/TTF/BebasNeue-Book.ttf";
import "./fonts/BebasNeue/Commercial/TTF/BebasNeue-Light.ttf";
import "./fonts/BebasNeue/Commercial/TTF/BebasNeue-Regular.ttf";
import "./fonts/BebasNeue/Commercial/TTF/BebasNeue-Thin.ttf";
import Services from './Pages/Services'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Home/>}/>
      <Route path='/Games' element={<Games/>}/>
      <Route path='/Portfolio' element={<OurWork/>}/>
      <Route path='/Portfolio/:serviceid' element={<Services/>}/>
      <Route path='/Portfolio/:serviceid/:projectid' element={<ProjectPage/>}/>
      <Route path='/News' element={<News/>}/>
      <Route path='/News/:articleid' element={<NewsArticle/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Route>
  )
)


function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
