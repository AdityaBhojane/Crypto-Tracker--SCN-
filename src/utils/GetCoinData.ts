import instance from "@/helper/CoinApi"


export const GetCoinData = async (currency:string, page:number=1)=>{
    try {
        const response = await instance.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=10&page=${page}`);
        // console.log(response.data)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return response.data
    } catch (error) {
        console.log(error)
    }
}