// Button.js

import React from 'react';
import styles from './Button.module.scss';
import { useState } from 'react';




const Headers = () => {
 
}
function Sobre() {
  
}
function Experiencia() {
 
}
function Habilidade() {
 
}

const Button = ({ className, children, onClick }) => {
  
  const [activeSection, setActiveSection] = useState('sobre');

  const showSection = (section) => {
    setActiveSection(section);
  };
  

  return (
    <button className={`${styles.button} ${styles[className]}`} onClick={() => showSection(onClick)}>
      {children}
    </button>
  );
};

export default Button;
