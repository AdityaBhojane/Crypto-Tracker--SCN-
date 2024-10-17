import { ThemeProvider } from "@/components/Theme-provider/Theme-provider"
import Routing from "./Route/Routing"
// import { GetCoinData } from "./utils/GetCoinData"

function App() {

  // const {data, isLoading} = useQuery({
  //   queryKey:['Coins'],
  //   queryFn:GetCoinData
  // });
  // console.log(data)


 


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routing />
      </ThemeProvider>
    </>
  )
}

export default App
