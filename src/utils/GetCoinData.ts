import instance from "@/helper/CoinApi"


export const GetCoinData = async (currency:string)=>{
    try {
        const response = await instance.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=5&page=1`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}