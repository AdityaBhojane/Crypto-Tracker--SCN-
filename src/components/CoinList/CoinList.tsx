import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import CoinRow from "../CoinRow/CoinRow"
import { GetCoinData } from "@/utils/GetCoinData"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { usePaginationStore, useProductStore } from "@/zustandStore/store"
import { PaginationDemo } from "../Pagination/Pagination"


interface CoinData {
  name: string;
  image: string;
  current_price: number;
  low_24h: number;
  high_24h: number;
  id:string
}


export function CoinList() {

  // Access category and setCategory from Zustand store
  const currency = useProductStore((state) => state.currency);
  const page = usePaginationStore(state => state.page)

  const { data, isLoading} = useQuery({
    queryKey: ['Coins',currency,page],
    queryFn:()=> GetCoinData(currency,page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5, 
  });

  if(isLoading){
    return (
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h3>Loading ...</h3>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Global Coin List</CardTitle>
                  <CardDescription>
                    Manage your Coins and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader className="text-lg">
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">img</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Lowest
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          highest
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Explore
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* coin data goes here */}
                      {data.map((items: CoinData, index: number) => {
                        return <CoinRow
                          key={index}
                          name={items.name}
                          image={items.image}
                          price={items.current_price}
                          lowPrice={items.low_24h}
                          highPrice={items.high_24h}
                          id={items.id}
                        />
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

             <PaginationDemo/>

        </main>
      </div>
    </div>
  )
}
