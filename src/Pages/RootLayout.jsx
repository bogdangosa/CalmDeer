import { Outlet } from "react-router-dom"
import Header from "../Components/Navigation/Header"


function RootLayout() {

  return (
    <>
        <Header/>
        <main className="container"><Outlet/></main>
    </>
  )
}

export default RootLayout
