import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonSizes = 'normal' | 'small';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  stretch?: boolean;
  yellow?: boolean;
  size?: ButtonSizes;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, stretch = false, yellow = false, size = 'normal' }) => (
  <button
    type="button"
    className={cn(styles.root, {
      [styles.stretch]: stretch,
      [styles.yellow]: yellow,
      [styles.small]: size === 'small',
    })}
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
