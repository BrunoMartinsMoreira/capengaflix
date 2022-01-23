import React from "react";
import styles from "./Header.module.css";
import perfil from '../../images/perfil.png';

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-6.png" 
          alt="netflix" />
        </a>
      </div>

      <div className={styles.user}>
        <a href="/">
          <img src={perfil} alt="user" />
        </a>
      </div>
    </header>
  );
};

export default Header;
