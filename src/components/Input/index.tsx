import React from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stretch?: boolean;
  value: string;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ onChange, value, stretch = false, className, placeholder }) => {
  return (
    <input
      type="text"
      className={cn(styles.root, className, { [styles.stretch]: stretch })}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
