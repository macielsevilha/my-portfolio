// Button.js

import React from 'react';
import styles from './Button.module.scss';

const Button = ({ className, children, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[className]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
