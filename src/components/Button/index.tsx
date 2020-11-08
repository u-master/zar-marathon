import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button type="button" className={styles.root} onClick={onClick}>
    {children}
  </button>
);

export default Button;
