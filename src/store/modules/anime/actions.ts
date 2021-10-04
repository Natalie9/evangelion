import { ActionTree } from 'vuex'
import { StateInterface } from '../../index'
import { Anime } from './types/'
import { getAnime } from 'src/services'

const actions: ActionTree<Anime, StateInterface> = {
  async getAnime ({ commit }, idAnime) {
    const response = await getAnime(idAnime)
    commit('setAnime', response.data)
  }
}

export default actions
