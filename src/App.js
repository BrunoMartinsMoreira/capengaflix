import React, { useEffect, useState } from "react";
import MovieItem from "./components/MovieItem/MovieItem";
import TmDbConfig from "./TmDbConfig";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await TmDbConfig.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <div className="App">
      <section>
        {movieList.map((item, key) => (
          <MovieItem key={key} />
        ))}
      </section>
    </div>
  );
};

export default App;
