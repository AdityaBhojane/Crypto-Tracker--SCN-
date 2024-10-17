import instance from "@/helper/CoinApi"


export const GetCoinDataById = async (CoinId:string | undefined)=>{
    try {
        const response = await instance.get(`https://api.coingecko.com/api/v3/coins/${CoinId}`);
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}