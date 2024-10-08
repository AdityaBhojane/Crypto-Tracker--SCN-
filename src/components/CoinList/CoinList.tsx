

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

interface CoinData {
    name: string;
    image: string;
    current_price: number;
    low_24h: number;
    high_24h: number;
  }

  
export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions."

export function CoinList() {

    const {data} = useQuery({
    queryKey:['Coins'],
    queryFn:GetCoinData,
    placeholderData: keepPreviousData  
  });

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
                        {data?.map((items:CoinData, index:number)=>{
                            return <CoinRow 
                            key={index}
                            name={items.name} 
                            image={items.image} 
                            price={items.current_price}
                            lowPrice={items.low_24h}
                            highPrice={items.high_24h}
                            />
                        })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
