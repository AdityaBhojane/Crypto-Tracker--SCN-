import { NavigationBar } from "@/components/NavigationBar/NavigationBar"
import {Outlet} from "react-router-dom"

function Layout() {

  return (
    <>
      <NavigationBar/>
      <Outlet/>
    </>
  )
}

export default Layout