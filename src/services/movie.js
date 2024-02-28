import {data} from "../data/index"
const fetchData = async () => {
    try {
      const { Search, totalResults } = await new Promise((resolve) =>
        setTimeout(() => resolve(data), 1000)
      )
      return {
        Search,
        totalResults,
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }
export default fetchData