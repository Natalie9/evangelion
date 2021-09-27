import { GetterTree } from 'vuex'
import { StateInterface } from '../../index'
import { Anime } from './types/'

const getters: GetterTree<Anime, StateInterface> = {
  uppercaseName (state) {
    console.log(state)
    // return state.STATE_ANIME.name.toUpperCase()
  }
}

export default getters
