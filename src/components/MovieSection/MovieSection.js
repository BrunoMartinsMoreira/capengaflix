import React from "react";
import styles from "./MovieSection.module.css";

const MovieSection = ({ title, items }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w300`;
  return (
    <div className={styles.movieSection}>
      <h2>{title}</h2>
      <div className={styles.movieArea}>
        <div className={styles.movieList}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className={styles.movieItem} key={key}>
                <img
                  src={`${imgUrl}${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
