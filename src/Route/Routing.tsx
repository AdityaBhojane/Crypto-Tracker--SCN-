import Layout from "@/Layout/Layout";
import HomePage from "@/pages/HomePage/HomePage";
// import CoinDetails from "@/pages/CoinDatailsPage/CoinDetails";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const CoinDetails = lazy(()=> import('@/pages/CoinDetailsPage/CoinDetails'))



function Routing() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="/details/:CoinId" element={
                <Suspense>
                  <CoinDetails/>
                </Suspense>
                }/>
            </Route>
        </Routes>
    </>
  )
}

export default Routing;