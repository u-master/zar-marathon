import React from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div>Pokémon</div>
    <nav>
      <ul className={styles.menu}>
        <li className={cn(styles.menuitem, styles.current)} key="Home">
          Home
        </li>
        <li className={styles.menuitem} key="Pokédex">
          <a href="#Pokedex">Pokédex</a>
        </li>
        <li className={styles.menuitem} key="Legendaries">
          <a href="#Legendaries">Legendaries</a>
        </li>
        <li className={styles.menuitem} key="Documentation">
          <a href="#Documentation">Documentation</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
