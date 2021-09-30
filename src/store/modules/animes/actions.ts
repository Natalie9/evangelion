import { ActionTree } from 'vuex'
import { StateInterface } from '../../index'
import Animes from 'src/types/Animes'
// import { getSearchTerm } from 'src/services'
import { Loading } from 'quasar'

const actions: ActionTree<Animes, StateInterface> = {
  searchTerm ({ commit }, searchedTerm) {
    // const response = await getSearchTerm(searchedTerm)
    setTimeout(() => {
      const resTeste = [{
        id: 'tt0988824',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_Ratio0.7273_AL_.jpg',
        title: 'Naruto: Shippûden',
        description: '(2007) (TV Series)'
      }, {
        id: 'tt0409591',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7273_AL_.jpg',
        title: 'Naruto',
        description: '(2002) (TV Series)'
      }, {
        id: 'tt4907198',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BODg5MmU3YTctYjIzNy00Y2JjLWEyZWQtZTFhOTcyZWZlZWRjXkEyXkFqcGdeQXVyOTgyMzIwMTc@._V1_Ratio0.7273_AL_.jpg',
        title: 'Naruto',
        description: '(II)'
      }, {
        id: 'tt3717532',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BMjk1NzA4Njg4Ml5BMl5BanBnXkFtZTgwMDgxODQ5MzE@._V1_Ratio0.7273_AL_.jpg',
        title: 'The Last: Naruto the Movie',
        description: '(2014)'
      }, {
        id: 'tt2290828',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BMTQ5MTcyNDYwMV5BMl5BanBnXkFtZTgwNzMzNzc0MjE@._V1_Ratio0.7273_AL_.jpg',
        title: 'Road to Ninja - Naruto the Movie',
        description: '(2012)'
      }, {
        id: 'tt14330542',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BZWFkMWFkZmItYzdjNS00MThiLThiMzEtNWFiMmY2MTg5YWVlXkEyXkFqcGdeQXVyNzI0Mjc1MDk@._V1_Ratio1.8636_AL_.jpg',
        title: 'Naruto: Climbing Silver',
        description: '(2021) (TV Mini Series)'
      }, {
        id: 'tt0476680',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BYWFkMTJjODEtMjY2NC00OGRiLThkYjMtMzBjMzVhY2FlZTEyXkEyXkFqcGdeQXVyNjYwMjkwMjg@._V1_Ratio0.7273_AL_.jpg',
        title: 'Naruto the Movie: Ninja Clash in the Land of Snow',
        description: '(2004)'
      }, {
        id: 'tt5866090',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BYTgzNzI0YjctNDQ3My00MGQ4LThhMDEtYWFiZDU3YmExMTEwXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_Ratio0.7273_AL_.jpg',
        title: 'The Day Naruto Became Hokage',
        description: '(2016) (Video)'
      }, {
        id: 'tt6342474',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/MV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_Ratio0.7273_AL_.jpg',
        title: 'Boruto: Naruto Next Generations',
        description: '(2017) (TV Series)'
      }, {
        id: 'tt3712568',
        resultType: 'Title',
        image: 'https://imdb-api.com/images/original/nopicture.jpg',
        title: 'Naruto',
        description: '(I)'
      }]
      // commit('setAnimesList', response.data.results)
      commit('setAnimesList', resTeste)
      Loading.hide()
    }, 700)
  }
}

export default actions
