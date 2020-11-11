import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import styles from './Header.module.scss';
import { GENERAL_MENU } from '../../routes';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

const Header = () => {
  const path = usePath();
  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <PokemonLogoSvg />
        </div>
        <nav>
          <ul className={styles.menu}>
            {GENERAL_MENU.map(({ title, link }) => (
              <li className={cn(styles.menuitem, { [styles.active]: link === path })} key={title}>
                <A href={link}>{title}</A>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
