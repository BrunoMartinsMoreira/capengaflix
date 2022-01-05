import React from "react";
import styles from "./MovieSection.module.css";

const MovieSection = ({ title, items }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w300`;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <img
              key={key}
              src={`${imgUrl}${item.poster_path}`}
              alt={item.original_title}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieSection;
