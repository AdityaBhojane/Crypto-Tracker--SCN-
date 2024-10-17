// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1

import instance from "@/helper/CoinApi"



export const GetChartData = async (CoinId:string | undefined, currency:string, days:number=90)=>{
    try {
        const response = await instance.get(`https://api.coingecko.com/api/v3/coins/${CoinId}/market_chart?vs_currency=${currency}&days=${days}`);
        const data = response.data;
        const limitedData = {
            prices: data.prices.slice(0, 20),
            market_caps: data.market_caps.slice(0, 20),
            total_volumes: data.total_volumes.slice(0, 20),
          };
      
        //   console.log(limitedData);
        return limitedData;
    } catch (error) {
        console.log(error)
    }
}