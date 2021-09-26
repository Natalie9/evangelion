import { MutationTree } from 'vuex'
import Animes from 'src/types/Animes'

const mutation: MutationTree<Animes> = {
  setAnimesList (state, animesList) {
    state.animesList = animesList
  }
}

export default mutation
