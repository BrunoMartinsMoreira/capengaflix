import React, { useEffect, useState } from "react";
import "./App.css";
import MovieSection from "./components/MovieSection/MovieSection";
import TmDbConfig from "./TmDbConfig";
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from "./components/Header/Header";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await TmDbConfig.getHomeList();
      setMovieList(list);

      let originals = list.filter(item => item.slug === 'originals');
      let randomChosenMovie = Math.floor(
        Math.random() * (originals[0].items.results.length -1)
      );
      let chosenMovie = originals[0].items.results[randomChosenMovie];
      let chosenMovieInfo = await TmDbConfig.getMovieInfo(chosenMovie.id, 'tv');

      setFeaturedData(chosenMovieInfo);

    };
    loadAll();
  }, []);

  return (
    <div className="App">
      <Header/>

      {featuredData && <FeaturedMovie item={featuredData}/>}

      <section className="main_lists">
        {movieList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
