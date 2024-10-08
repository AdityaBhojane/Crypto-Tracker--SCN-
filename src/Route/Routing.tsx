import Layout from "@/Layout/Layout";
import HomePage from "@/pages/HomePage/HomePage";

import { Route, Routes } from "react-router-dom"



function Routing() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default Routing;