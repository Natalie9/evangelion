import { MutationTree } from 'vuex'
import Anime from 'src/types/Anime'

const mutation: MutationTree<Anime> = {
  changeName (state, name) {
    // state.STATE_ANIME.name = name
  },
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  },
  setAnime (state, anime) {
    // state.STATE_ANIME = anime
  }
}

export default mutation
