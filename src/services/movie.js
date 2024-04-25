import {data} from "../data/index"

class BaseService{
  createApiUrl(params = {}){
    const queryParams = new URLSearchParams({apikey: process.env.REACT_APP_API_KEY,...params})
    return`${process.env.REACT_APP_BASE_URL}?${queryParams.toString()}`
  }
}
// const fetchData = async () => {
//     try {
//       const { Search, totalResults } = await new Promise((resolve) =>
//         setTimeout(() => resolve(data), 1000)
//       )
//       return {
//         Search,
//         totalResults,
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error)
//       throw error
//     }
//   }
// export default fetchData
