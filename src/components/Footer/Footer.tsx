import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <a href="#Love">
      Make with{' '}
      <span role="img" aria-label="Love">
        ❤️
      </span>
    </a>
    <a href="#Team">Ours Team</a>
  </footer>
);

export default Footer;
