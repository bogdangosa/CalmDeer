import { Outlet, ScrollRestoration } from "react-router-dom"
import ScrolltoTop from "../Components/Auxiliary/ScrolltoTop"
import Footer from "../Components/Navigation/Footer"
import Header from "../Components/Navigation/Header"


function RootLayout() {

  return (
    <>
        <Header/>
        <main className="container"><Outlet/></main>
        <Footer/>
    </>
  )
}

export default RootLayout
