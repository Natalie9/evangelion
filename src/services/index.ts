import axios from 'axios'

const APIKEY = 'k_oytr4k7n/'
const URLBASE = 'https://imdb-api.com/en/API/SEARCH/'

export async function getEvangelionInfos () {
  // TODO passar a key e o id de evangelion por uma env
  return axios.get(URLBASE + APIKEY + '/tt0112159')
}

export async function getSearchTerm (searchedTerm: string) {
  return axios.get(URLBASE + APIKEY + searchedTerm)
}
