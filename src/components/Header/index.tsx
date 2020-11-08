import React from 'react';
// import cn from 'classnames';
import styles from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  title: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    title: 'Home',
    link: '#Home',
  },
  {
    id: 2,
    title: 'Pokédex',
    link: '#Pokédex',
  },
  {
    id: 3,
    title: 'Legendaries',
    link: '#Legendaries',
  },
  {
    id: 4,
    title: 'Documentation',
    link: '#Documentation',
  },
];

const Header = () => (
  <header className={styles.root}>
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <PokemonLogoSvg />
      </div>
      <nav>
        <ul className={styles.menu}>
          {MENU.map(({ id, title, link }) => (
            <li className={styles.menuitem} key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
