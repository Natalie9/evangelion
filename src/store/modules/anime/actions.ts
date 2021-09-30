import { ActionTree } from 'vuex'
import { StateInterface } from '../../index'
import { Anime } from './types/'
// import { getAnime } from 'src/services'

const actions: ActionTree<Anime, StateInterface> = {
  getAnime ({ commit }, idAnime) {
    // const response = await getAnime(idAnime)
    const resTeste = {
      id: 'tt0988824',
      title: 'Naruto: Shippûden',
      originalTitle: '',
      fullTitle: 'Naruto: Shippûden (TV Series 2007–2017)',
      type: 'TVSeries',
      year: '2007',
      image: 'https://imdb-api.com/images/original/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_Ratio0.6791_AL_.jpg',
      releaseDate: '2007-02-15',
      runtimeMins: '24',
      runtimeStr: '24mins',
      plot: 'Naruto Uzumaki wants to be the best ninja in the land. He\'s done well so far, but with the looming danger posed by the mysterious Akatsuki organization, Naruto knows he must train harder than ever and leaves his village for intense exercises that will push him to his limits.',
      plotLocal: '',
      plotLocalIsRtl: false,
      awards: 'Top Rated TV #209 | 2 wins & 10 nominations.',
      directors: '',
      directorList: [],
      writers: '',
      writerList: [],
      stars: 'Junko Takeuchi, Maile Flanagan, Kate Higgins, Chie Nakamura',
      starList: [{
        id: 'nm0847594',
        name: 'Junko Takeuchi'
      }, {
        id: 'nm0281068',
        name: 'Maile Flanagan'
      }, {
        id: 'nm1512156',
        name: 'Kate Higgins'
      }, {
        id: 'nm1468944',
        name: 'Chie Nakamura'
      }],
      actorList: [{
        id: 'nm0847594',
        image: 'https://imdb-api.com/images/original/MV5BNzIzNmM5OGEtMGZiYS00ZTg4LThhYmMtNjYwZDhlNzMwZGIwXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Junko Takeuchi',
        asCharacter: 'Naruto Uzumaki / ... 373 episodes, 2007-2017'
      }, {
        id: 'nm0281068',
        image: 'https://imdb-api.com/images/original/MV5BZWQ3NDc5MGYtNjZiMy00ZjAzLTlhMWYtZGM1NDEwNzJlMGM5XkEyXkFqcGdeQXVyMDQ1MjkyMA@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Maile Flanagan',
        asCharacter: 'Naruto Uzumaki / ... 373 episodes, 2007-2017'
      }, {
        id: 'nm1512156',
        image: 'https://imdb-api.com/images/original/MV5BODQ2OTg4OGYtZjRkZS00ZWQ2LWFjZGUtMzVhMjYxYTljYmExXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_Ratio1.2273_AL_.jpg',
        name: 'Kate Higgins',
        asCharacter: 'Sakura Haruno / ... 278 episodes, 2007-2017'
      }, {
        id: 'nm1468944',
        image: 'https://imdb-api.com/images/original/nopicture.jpg',
        name: 'Chie Nakamura',
        asCharacter: 'Sakura Haruno / ... 267 episodes, 2007-2017'
      }, {
        id: 'nm1043186',
        image: 'https://imdb-api.com/images/original/MV5BZmM2NGRlNjYtMmQ3Yy00YWZiLThkYTUtNGMwYWQxZjRmMmRkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_Ratio0.7273_AL_.jpg',
        name: 'Dave Wittenberg',
        asCharacter: 'Kakashi Hatake / ... 258 episodes, 2007-2017'
      }, {
        id: 'nm0409287',
        image: 'https://imdb-api.com/images/original/MV5BOWM0MjI1ZDktZGJiZi00MWZkLWJhYjgtZmU4OTg1NmY2ZDY5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_Ratio0.7273_AL_.jpg',
        name: 'Kazuhiko Inoue',
        asCharacter: 'Kakashi Hatake / ... 227 episodes, 2007-2017'
      }, {
        id: 'nm1035500',
        image: 'https://imdb-api.com/images/original/MV5BMTczMDA1MDIzNV5BMl5BanBnXkFtZTYwOTE1OTYy._V1_Ratio1.0000_AL_.jpg',
        name: 'Kyle Hebert',
        asCharacter: 'Kiba Inuzuka / ... 194 episodes, 2007-2017'
      }, {
        id: 'nm0523180',
        image: 'https://imdb-api.com/images/original/MV5BMTU2NjA4NDIzMl5BMl5BanBnXkFtZTcwNzQxNjQwOQ@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Yuri Lowenthal',
        asCharacter: 'Sasuke Uchiha / ... 176 episodes, 2007-2017'
      }, {
        id: 'nm1617276',
        image: 'https://imdb-api.com/images/original/MV5BZGYwZGMwNzEtNmU0OS00M2Q5LTg4NTEtNWZhZWFiMDU5YjljXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Noriaki Sugiyama',
        asCharacter: 'Sasuke Uchiha 166 episodes, 2007-2017'
      }, {
        id: 'nm0441534',
        image: 'https://imdb-api.com/images/original/MV5BZGUwZDA3MzctMDc3MS00MjllLTk1YjctN2UyYWEyMzNmM2RhXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_Ratio0.7273_AL_.jpg',
        name: 'Masako Katsuki',
        asCharacter: 'Tsunade, The Fifth Hokage / ... 158 episodes, 2007-2017'
      }, {
        id: 'nm0922026',
        image: 'https://imdb-api.com/images/original/nopicture.jpg',
        name: 'Debi Mae West',
        asCharacter: 'Tsunade, The Fifth Hokage / ... 163 episodes, 2007-2017'
      }, {
        id: 'nm0642601',
        image: 'https://imdb-api.com/images/original/MV5BMTQ4NjY2ODQ5MF5BMl5BanBnXkFtZTcwMTk5NzkxOA@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Colleen O\'Shaughnessey',
        asCharacter: 'Ino Yamanaka / ... 156 episodes, 2007-2017'
      }, {
        id: 'nm0089710',
        image: 'https://imdb-api.com/images/original/MV5BM2YxOWUwYzItNzU4Yy00OTkzLWI0NmQtNTRjNTQ4N2QxYzZiXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Steve Blum',
        asCharacter: 'Orochimaru / ... 153 episodes, 2007-2017'
      }, {
        id: 'nm1315809',
        image: 'https://imdb-api.com/images/original/MV5BYmZkNjEyODUtZGE2Zi00ZjE0LWIyNzctNDQ3NTdhNmQ2YzhlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Stephanie Sheh',
        asCharacter: 'Hinata Hyuga / ... 153 episodes, 2007-2017'
      }],
      fullCast: null,
      genres: 'Animation, Action, Adventure, Comedy, Drama, Fantasy',
      genreList: [{
        key: 'Animation',
        value: 'Animation'
      }, {
        key: 'Action',
        value: 'Action'
      }, {
        key: 'Adventure',
        value: 'Adventure'
      }, {
        key: 'Comedy',
        value: 'Comedy'
      }, {
        key: 'Drama',
        value: 'Drama'
      }, {
        key: 'Fantasy',
        value: 'Fantasy'
      }],
      companies: 'Pierrot',
      companyList: [{
        id: 'co0106793',
        name: 'Pierrot'
      }],
      countries: 'Japan',
      countryList: [{
        key: 'Japan',
        value: 'Japan'
      }],
      languages: 'English, Japanese',
      languageList: [{
        key: 'English',
        value: 'English'
      }, {
        key: 'Japanese',
        value: 'Japanese'
      }],
      contentRating: 'TV-PG',
      imDbRating: '8.6',
      imDbRatingVotes: '88116',
      metacriticRating: '',
      ratings: null,
      wikipedia: null,
      posters: null,
      images: null,
      trailer: null,
      boxOffice: {
        budget: '',
        openingWeekendUSA: '',
        grossUSA: '',
        cumulativeWorldwideGross: ''
      },
      tagline: 'The destruction of the Hidden Leaf Village begins.',
      keywords: 'anime,battle,bleeding from eyes,blood,bridge',
      keywordList: ['anime', 'battle', 'bleeding from eyes', 'blood', 'bridge'],
      similars: [{
        id: 'tt0409591',
        title: 'Naruto',
        fullTitle: 'Naruto (2002–2007)',
        year: '2002–2007',
        image: 'https://imdb-api.com/images/original/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6737_AL_.jpg',
        plot: 'Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village\'s leader and strongest ninja.',
        directors: '',
        stars: 'Junko Takeuchi, Maile Flanagan, Kate Higgins',
        genres: 'Certificate: TV-Y7-FV Animation, Action, Adventure',
        imDbRating: '8.3'
      }, {
        id: 'tt6342474',
        title: 'Boruto: Naruto Next Generations',
        fullTitle: 'Boruto: Naruto Next Generations (TV Series 2017)',
        year: 'TV Series 2017',
        image: 'https://imdb-api.com/images/original/MV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_Ratio0.7053_AL_.jpg',
        plot: 'Son of Naruto Uzumaki, Boruto, follows his father\'s footsteps along with his friends to become great ninja. Throughout all their adventures, Boruto is determined to make his mark in the ninja world and live outside of his father\'s shadow.',
        directors: '',
        stars: 'Yûko Sanpei, Kokoro Kikuchi, Ryûichi Kijima',
        genres: 'Animation, Action, Adventure',
        imDbRating: '7'
      }, {
        id: 'tt2098220',
        title: 'Hunter x Hunter',
        fullTitle: 'Hunter x Hunter (2011–2014)',
        year: '2011–2014',
        image: 'https://imdb-api.com/images/original/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_Ratio0.6737_AL_.jpg',
        plot: 'Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.',
        directors: '',
        stars: 'Issei Futamata, Megumi Han, Cristina Valenzuela',
        genres: 'Animation, Action, Adventure',
        imDbRating: '8.9'
      }, {
        id: 'tt0388629',
        title: 'One Piece',
        fullTitle: 'One Piece (TV Series 1999)',
        year: 'TV Series 1999',
        image: 'https://imdb-api.com/images/original/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.6737_AL_.jpg',
        plot: 'Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".',
        directors: '',
        stars: 'Mayumi Tanaka, Tony Beck, Laurent Vernin',
        genres: 'Animation, Action, Adventure',
        imDbRating: '8.8'
      }, {
        id: 'tt1355642',
        title: 'Fullmetal Alchemist: Brotherhood',
        fullTitle: 'Fullmetal Alchemist: Brotherhood (2009–2012)',
        year: '2009–2012',
        image: 'https://imdb-api.com/images/original/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7158_AL_.jpg',
        plot: 'Two brothers search for a Philosopher\'s Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.',
        directors: '',
        stars: 'Kent Williams, Iemasa Kayumi, Vic Mignogna',
        genres: 'Animation, Action, Adventure',
        imDbRating: '9.1'
      }, {
        id: 'tt0877057',
        title: 'Death Note',
        fullTitle: 'Death Note (2006–2007)',
        year: '2006–2007',
        image: 'https://imdb-api.com/images/original/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_Ratio0.6842_AL_.jpg',
        plot: 'An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.',
        directors: '',
        stars: 'Mamoru Miyano, Brad Swaile, Vincent Tong',
        genres: 'Animation, Crime, Drama',
        imDbRating: '9'
      }, {
        id: 'tt4508902',
        title: 'One Punch Man',
        fullTitle: 'One Punch Man (TV Series 2015)',
        year: 'TV Series 2015',
        image: 'https://imdb-api.com/images/original/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_Ratio0.6737_AL_.jpg',
        plot: 'The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.',
        directors: '',
        stars: 'Makoto Furukawa, Kaito Ishikawa, Max Mittelman',
        genres: 'Animation, Action, Comedy',
        imDbRating: '8.8'
      }, {
        id: 'tt5626028',
        title: 'My Hero Academia',
        fullTitle: 'My Hero Academia (TV Series 2016)',
        year: 'TV Series 2016',
        image: 'https://imdb-api.com/images/original/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.8000_AL_.jpg',
        plot: 'A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.',
        directors: '',
        stars: 'Daiki Yamashita, Nobuhiko Okamoto, Ayane Sakura',
        genres: 'Animation, Action, Adventure',
        imDbRating: '8.5'
      }, {
        id: 'tt9335498',
        title: 'Demon Slayer: Kimetsu No Yaiba',
        fullTitle: 'Demon Slayer: Kimetsu No Yaiba (TV Series 2019)',
        year: 'TV Series 2019',
        image: 'https://imdb-api.com/images/original/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_Ratio0.7158_AL_.jpg',
        plot: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.',
        directors: '',
        stars: 'Natsuki Hanae, Zach Aguilar, Abby Trott',
        genres: 'Animation, Action, Fantasy',
        imDbRating: '8.7'
      }, {
        id: 'tt0214341',
        title: 'Dragon Ball Z',
        fullTitle: 'Dragon Ball Z (1996–2003)',
        year: '1996–2003',
        image: 'https://imdb-api.com/images/original/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6947_AL_.jpg',
        plot: 'After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.',
        directors: '',
        stars: 'Doc Harris, Christopher Sabat, Scott McNeil',
        genres: 'Animation, Action, Adventure',
        imDbRating: '8.7'
      }, {
        id: 'tt3717532',
        title: 'The Last: Naruto the Movie',
        fullTitle: 'The Last: Naruto the Movie (2014)',
        year: '2014',
        image: 'https://imdb-api.com/images/original/MV5BMjk1NzA4Njg4Ml5BMl5BanBnXkFtZTgwMDgxODQ5MzE@._V1_Ratio0.6737_AL_.jpg',
        plot: 'Hinata Hyuga\'s younger sister has been kidnapped, so Naruto must do what he can to save her.',
        directors: 'Tsuneo Kobayashi',
        stars: 'Junko Takeuchi, Nana Mizuki, Jun Fukuyama',
        genres: 'Animation, Action, Adventure',
        imDbRating: '7.6'
      }, {
        id: 'tt12343534',
        title: 'Jujutsu Kaisen',
        fullTitle: 'Jujutsu Kaisen (TV Series 2020)',
        year: 'TV Series 2020',
        image: 'https://imdb-api.com/images/original/MV5BNzQyYzU3Y2MtOWY2Yy00ZGM2LTg3ZTUtMDJkZTJiMmEzMjYxXkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_Ratio0.8000_AL_.jpg',
        plot: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman\'s school to be able to locate the demon\'s other body parts and thus exorcise himself.',
        directors: '',
        stars: 'Junya Enoki, Yûichi Nakamura, Yuma Uchida',
        genres: 'Animation, Action, Adventure',
        imDbRating: '8.7'
      }],
      tvSeriesInfo: {
        yearEnd: '2017',
        creators: 'Masashi Kishimoto',
        creatorList: [{
          id: 'nm1618263',
          name: 'Masashi Kishimoto'
        }],
        seasons: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
      },
      tvEpisodeInfo: null,
      errorMessage: ''
    }
    // commit('setAnime', response.data)
    commit('setAnime', resTeste)
  }
}

export default actions
