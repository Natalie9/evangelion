import { Anime } from './types'

function state (): Anime {
  return {
    STATE_ANIME_INFO: {
      images: [],
      languages: '',
      originalTitle: '',
      plot: '',
      releaseDate: '',
      runtimeMins: '',
      runtimeStr: '',
      similars: [],
      starList: [],
      stars: '',
      tagline: '',
      type: '',
      year: '',
      genreList: [],
      keywordList: [],
      keywords: '',
      actorList: [],
      fullTitle: '',
      genres: '',
      id: '',
      imDbRating: 0,
      image: '',
      title: ''
    }

  }
}

export default state
