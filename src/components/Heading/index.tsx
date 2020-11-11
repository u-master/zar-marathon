import React from 'react';
import cn from 'classnames';

import styles from './Heading.module.scss';

type HeadingSize = 'h1' | 'h2' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  size?: HeadingSize;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, size = 'h1', className }) => {
  const headingClasses = cn(styles[size], className);
  switch (size) {
    case 'h2':
      return <h2 className={headingClasses}>{children}</h2>;

    case 'h3':
      return <h3 className={headingClasses}>{children}</h3>;

    case 'h4':
      return <h4 className={headingClasses}>{children}</h4>;

    case 'h5':
      return <h5 className={headingClasses}>{children}</h5>;

    case 'h6':
      return <h6 className={headingClasses}>{children}</h6>;

    case 'h1':
    default:
      return <h1 className={headingClasses}>{children}</h1>;
  }
};

export default Heading;
