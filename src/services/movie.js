import { data } from "../data/index";

class BaseService {
  createApiUrl(params = {}) {
    const queryParams = new URLSearchParams({
      apikey: process.env.REACT_APP_API_KEY,
      ...params,
    });
    return `${process.env.REACT_APP_BASE_URL}?${queryParams.toString()}`;
  }
  async simulateFetchWithDelay(data, errorChance = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > errorChance) {
          resolve(data);
        } else {
          reject(new Error("Simulated error during data retrieval"));
        }
      }, 5000);
    });
  }
  async fetchFromApi(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
    
  }
  
 async fetchMoviesBySearchTerm(searchTerm, type = '', page = 1) {
  try {
    if (this.DEV_MODE) {
      return await this.simulateFetchWithDelay(data)
    } else {
      const url = this.createApiUrl({ s: searchTerm, type, page })

      return await this.fetchFromApi(url)
    }
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}

async fetchMovieById(id) {
  try {
    if (this.DEV_MODE) {
      return await this.simulateFetchWithDelay(data.movie, 0.5)
    } else {
      const url = this.createApiUrl({ i: id })

      return this.fetchFromApi(url)
    }
  } catch (error) {
    console.error('Error fetching movie:', error)
    throw error
  }
}
}

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
