import { Actor } from 'src/types/Actor'

export default interface IAnime {
  id: string,
  title: string;
  fullTitle: string,
  actorList?: Array<Actor>,
  genreList?: [],
  genres?: string,
  imDbRating?: number,
  image: string,
  images?: [],
  keywordList?: Array<string>,
  keywords?: string,
  languages?: string,
  originalTitle?: string,
  plot?: string,
  releaseDate?: string,
  runtimeMins?: string,
  runtimeStr?: string
  similars?: [],
  starList?: [],
  stars?: string,
  tagline?: string,
  type?: string,
  year?: string,
}
