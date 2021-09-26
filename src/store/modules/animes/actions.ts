import { ActionTree } from 'vuex'
import { StateInterface } from '../../index'
import Animes from 'src/types/Animes'
import { getSearchTerm } from 'src/services'

const actions: ActionTree<Animes, StateInterface> = {
  async searchTerm ({ commit }, searchedTerm) {
    const response = await getSearchTerm(searchedTerm)
    commit('setAnimesList', response.data.results)
  }
}

export default actions
