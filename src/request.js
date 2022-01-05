const API_KEY = "da6a2d288b308210c1234c6006869dc5";

const requests = {
  getTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US
  `,
  getNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_network=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1&language=en-US`,
  getAction: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  getComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  getHorror: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  getRomance: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  getDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
}

export default requests;