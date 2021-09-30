import axios from 'axios'

const APIKEY = 'k_hp2e4rfb/'
const URLBASE = 'https://imdb-api.com/en/API/'

export async function getEvangelionInfos () {
  // TODO passar a key e o id de evangelion por uma env
  return axios.get(URLBASE + APIKEY + 'tt0112159')
}

export async function getSearchTerm (searchedTerm: string) {
  return axios.get(URLBASE + 'Search/' + APIKEY + searchedTerm)
}

export async function getAnime (idAnime: string) {
  return axios.get(URLBASE + 'Title/' + APIKEY + idAnime)
}
