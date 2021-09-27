import { MutationTree } from 'vuex'
import { Anime } from './types/'

const mutation: MutationTree<Anime> = {
  setAnime (state, anime) {
    state.STATE_ANIME_INFO = anime
  }
}

export default mutation
