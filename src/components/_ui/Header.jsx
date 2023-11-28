import React from 'react';
import styles from './Header.module.scss'

const Heading1 = ({ children }) => {
  return <h1 className={styles['heading-1']}>{children}</h1>;
};

const Heading2 = ({ children }) => {
  return <h2 className={styles['heading-2']}>{children}</h2>;
};
const Heading3 = ({ children }) => {
  return <h2 className={styles['heading-3']}>{children}</h2>;
};

const Paragrafo = ({ children }) => {
  return <p className={styles.paragrafo}>{children}</p>;
};

export { Heading1, Heading2, Heading3, Paragrafo };