/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "a3ca172917f4b9140c90a232dfda287c";
const BASE_URL = "https://api.themoviedb.org/3";
const URL_CONFIG_PARAMS = `language=pt-BR&api_key=${API_KEY}`;

const fetchMovies = async (endpoint) => {
  const request = await fetch(`${BASE_URL}${endpoint}`);
  const json = request.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        itens: await fetchMovies(
          `/discover/tv?with_network=213&${URL_CONFIG_PARAMS}`,
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        itens: await fetchMovies(`/trending/all/week?${URL_CONFIG_PARAMS}`),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        itens: await fetchMovies(`/movie/top_rated?${URL_CONFIG_PARAMS}`),
      },
      {
        slug: "action",
        title: "Ação",
        itens: await fetchMovies(
          `/discover/movie?with_genres=28${URL_CONFIG_PARAMS}`,
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        itens: await fetchMovies(
          `/discover/movie?with_genres=35${URL_CONFIG_PARAMS}`,
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        itens: await fetchMovies(
          `/discover/movie?with_genres=27${URL_CONFIG_PARAMS}`,
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        itens: await fetchMovies(
          `/discover/movie?with_genres=10749${URL_CONFIG_PARAMS}`,
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        itens: await fetchMovies(
          `/discover/movie?with_genres=99${URL_CONFIG_PARAMS}`,
        ),
      },
    ];
  },
};
