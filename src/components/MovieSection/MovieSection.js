import React,{useState} from "react";
import styles from "./MovieSection.module.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieSection = ({ title, items }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w300`;
  const [scrollX, setScrollX] = useState(-100);

  const handleLeftNavigation = () => {
    let scrollAxisX = scrollX + Math.round(window.innerWidth / 2);

    if(scrollAxisX > 0){
      scrollAxisX = 0;
    }
    
    setScrollX(scrollAxisX);
  }

  const handleRightNavigation = () => {
    let scrollAxisX = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 200;

    if(window.innerWidth - listWidth > scrollAxisX){
      scrollAxisX = (window.innerWidth - listWidth) - 60;
    }

    setScrollX(scrollAxisX);
  }

  return (
    <div className={styles.movieSection}>
      <h2>{title}</h2>

      <div className={styles.arrowLeft} onClick={handleLeftNavigation}>
        <NavigateBeforeIcon style={{fontSize:50}}/>
      </div>

      <div className={styles.arrowRight} onClick={handleRightNavigation}>
        <NavigateNextIcon  style={{fontSize:50}}/>
      </div>

      <div className={styles.movieArea}>
        <div className={styles.movieList}
          style={{
            marginLeft: scrollX,
            width:items.results.length * 200,
          }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className={styles.movieItem} key={key} onClick={()=> console.log(item.id)}>
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
