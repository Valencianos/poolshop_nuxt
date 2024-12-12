import {defineStore} from 'pinia'
import axios from 'axios'

export const useBreweryStore = defineStore('brewery', {
  state: () => ({
    breweries: [],
    titles: [],
  }),
  actions: {
    async getBreweries() {
      const data = await axios.get('https://api.openbrewerydb.org/v1/breweries')
      this.breweries = data?.data
    },
    async getTitles() {
      const data = await axios.get('https://api.openbrewerydb.org/v1/breweries/by_name')
      this.titles = data?.data
    }
  },
})