/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './FeatureMovie.module.css';

const FeaturedMovie = ({item}) => {
  let releaseDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }

  return (
    <section className={styles.featured} style={{
      backgroundSize:'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className={styles.featuredVertical}>
        <div className={styles.featuredHorizontal}>

          <div className={styles.movieName}>{item.original_name}</div>

          <div className={styles.featuredInfo}>
            <div className={styles.voteAverage}>{item.vote_average} pontos</div>
            <div className={styles.year}>
             <strong>Ano de lançamento:</strong> {releaseDate.getFullYear()}
            </div>
            <div className={styles.seasons}>
              {
                item.number_of_seasons} temporada{
                item.number_of_seasons > 1 ? 's' : ''
              }
            </div>
          </div>

          <div className={styles.description}>
            {item.overview ? item.overview : 'Sem descrição disponível'}
          </div>

          <div className={styles.buttons}>
            <a href={`/watch/${item.id}`}>▶ Assistir</a> 
            <a href={`/minha_lista/add/${item.id}`}>+ Minha Lista</a>
          </div>
          <div className={styles.genders}>
            <strong>Gêneros:</strong> {
              genres.join(', ')
            }
            </div>    
        </div>
      </div>
    </section>
  )
};

export default FeaturedMovie;
