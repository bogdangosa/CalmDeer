import { Outlet } from "react-router-dom"
import Header from "../Components/Navigation/Header"


function RootLayout() {

  return (
    <>
        <Header/>
        <main><Outlet/></main>
    </>
  )
}

export default RootLayout
