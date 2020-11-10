import React from 'react';

import styles from './Heading.module.scss';

type HeadingSize = 'h1' | 'h2' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  size?: HeadingSize;
}

const Heading: React.FC<HeadingProps> = ({ children, size = 'h1' }) => {
  switch (size) {
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;

    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;

    case 'h4':
      return <h4 className={styles.h4}>{children}</h4>;

    case 'h5':
      return <h5 className={styles.h5}>{children}</h5>;

    case 'h6':
      return <h6 className={styles.h6}>{children}</h6>;

    case 'h1':
    default:
      return <h1 className={styles.h1}>{children}</h1>;
  }
};

export default Heading;
