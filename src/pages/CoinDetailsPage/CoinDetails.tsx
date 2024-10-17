
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GetCoinDataById } from "@/utils/GetCoinbyId";
import { useProductStore } from "@/zustandStore/store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
const ChartOne = lazy(()=> import('@/components/Chart One/ChartOne') );

function CoinDetails() {

    const {CoinId} = useParams();
    const currency = useProductStore((state) => state.currency);
    const newCurr = currency.toLowerCase()
    
    const {data, isLoading} = useQuery({
        queryKey: ['Coins',CoinId],
        queryFn:()=> GetCoinDataById(CoinId),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60 * 5, 
      });
   

    return (
        <>
            <div className="">
                <div className="max-w-full m-6">
                    {!isLoading? <Card
                        className="overflow-hidden flex max-lg:flex-col" x-chunk="dashboard-05-chunk-4"
                    >
                        <CardHeader className="flex flex-row max-2xl:flex-col-reverse max-md:flex-col-reverse max-lg:flex-row max-lg:w-full min-w-[450px] items-center bg-muted/50 w-1/2">
                            <div className="grid gap-0.5 m-6">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                    {data?.name}
                                </CardTitle>
                                <CardDescription dangerouslySetInnerHTML={{ __html: data?.description.en.slice(0,500) }}></CardDescription>
                            </div>
                            <div className="w-[700px] max-md:w-[100px] max-2xl:w-[100px] max-lg:w-[400px] m-5">
                            <img className="w-full" src={data?.image.large} alt="coinImage" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 text-sm w-full">
                            <div className=" gap-3">
                                <div className="font-semibold">Details</div>
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Lowest Price :
                                        </span>
                                        <span>{data?.market_data.low_24h[newCurr]}</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Highest Price :
                                        </span>
                                        <span>{data?.market_data.high_24h[newCurr]}</span>
                                    </li>
                                </ul>
                                <Separator className="my-2" />
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Symbol :</span>
                                        <span>{data?.symbol}</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Market Cap Change :</span>
                                        <span>{data?.market_data.market_cap_change_24h}</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Market Cap Change In Percentage :
                                        </span>
                                        <span>{data?.market_data.market_cap_change_percentage_24h}%</span>
                                    </li>
                                    <li className="flex items-center justify-between font-semibold">
                                        <span className="text-muted-foreground">Market Cap Rank :</span>
                                        <span>{data?.market_data.market_cap_rank}th</span>
                                    </li>
                                </ul>
                            </div>
                            <Separator className="my-4 " />
                            <div className="grid grid-cols-2 gap-4 mt-9">
                                <div className="grid gap-3">
                                    <div className="font-semibold ">Links : </div>
                                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                                        <span><a href={data?.links.blockchain_site[0]}>Blockchain site link</a></span>
                                    </address>
                                </div>
                                
                            </div>
                        </CardContent>
                    </Card>:<>
                        <h3>Loading...</h3>
                    </>}
                </div>
                <div className="max-w-full m-6 ">
                    <Suspense fallback={<h3>Loading</h3>}>
                        <ChartOne/>
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default CoinDetails;