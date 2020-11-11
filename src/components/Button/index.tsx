import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonSizes = 'normal' | 'small';

type ButtonColor = 'green' | 'yellow';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  stretch?: boolean;
  color?: ButtonColor;
  size?: ButtonSizes;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, stretch = false, color = 'green', size = 'normal' }) => (
  <button
    type="button"
    className={cn(styles.root, {
      [styles.stretch]: stretch,
      [styles.colorgreen]: color === 'green',
      [styles.coloryellow]: color === 'yellow',
      [styles.small]: size === 'small',
    })}
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
