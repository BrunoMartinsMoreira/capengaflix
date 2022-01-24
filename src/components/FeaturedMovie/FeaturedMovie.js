/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './FeatureMovie.module.css';

const FeaturedMovie = ({item}) => {
  let releaseDate = new Date(item.first_air_date);
  let genres = [];

  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }

  let description = item.overview;
  if(description.length > 300){
    description = description.substring(0, 300)+'...'
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
            {releaseDate.getFullYear()}
            </div>
            <div className={styles.seasons}>
              {
                item.number_of_seasons} temporada{
                item.number_of_seasons > 1 ? 's' : ''
              }
            </div>
          </div>

          <div className={styles.description}>
            {description ? description : 'Sem descrição disponível'}
          </div>

          <div className={styles.buttons}>
            <a className={styles.play} href={`/watch/${item.id}`}>▶ Assistir</a> 
            <a className={styles.mylist} href={`/minha_lista/add/${item.id}`}>+ Minha Lista</a>
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
