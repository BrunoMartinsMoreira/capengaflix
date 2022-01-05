import React, { useEffect, useState } from "react";
import "./App.css";
import MovieSection from "./components/MovieSection/MovieSection";
import TmDbConfig from "./TmDbConfig";
//1h5min
const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await TmDbConfig.getHomeList();
      console.log(list);
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <div className="App">
      <section>
        {movieList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.itens} />
        ))}
      </section>
    </div>
  );
};

export default App;
