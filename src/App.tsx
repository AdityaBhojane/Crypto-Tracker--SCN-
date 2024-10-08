
// import { useQuery } from "@tanstack/react-query"
import { CoinList } from "./components/CoinList/CoinList"
import { NavigationBar } from "./components/NavigationBar/NavigationBar"
// import { GetCoinData } from "./utils/GetCoinData"

function App() {

  // const {data, isLoading} = useQuery({
  //   queryKey:['Coins'],
  //   queryFn:GetCoinData
  // });

  // console.log(data)

  return (
    <>
      <NavigationBar/>
      <CoinList />
    </>
  )
}

export default App
