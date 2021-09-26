import { ActionTree } from 'vuex'
import { StateInterface } from '../../index'
import Anime from 'src/types/Anime'

const actions: ActionTree<Anime, StateInterface> = {
  searchTerm ({ commit }, searchedTerm) {
    console.log(searchedTerm, commit)
  }
}

export default actions
