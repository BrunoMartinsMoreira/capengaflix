import React, { useEffect, useState } from "react";
import "./App.css";
import MovieSection from "./components/MovieSection/MovieSection";
import TmDbConfig from "./TmDbConfig";
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from "./components/Header/Header";
//2:25

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 150){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }

  },[])

  return (
    <div className="App">
      <Header black={blackHeader}/>

      {featuredData && <FeaturedMovie item={featuredData}/>}

      <section className="main_lists">
        {movieList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Projeto baseado no design da Netflix, desenvolvido para fins didáticos.
      </footer>
    </div>
  );
};

export default App;
