// src/components/HeaderLayout.js
import React from 'react';

import styles from './Header.module.scss'
import Logo from '../_ui/Logo'
import Link from '../_ui/Link';
import Button from '../_ui/Button';
import Navbar from '../_ui/Navbar';

const HeaderLayout = () => {
  return (
    <header className={styles.header}>
     <Logo name="dev.maciel" />
     <Navbar>
     <li><Link className={'link'} href="/">Home</Link></li>
        <li><Link className={'link'} href="servicos">Serviços</Link></li>
        <li><Link className={'link'} href="projetos">Projetos</Link></li>
        <li><Link className={'link'} href="/sobre">Sobre</Link></li>
     </Navbar>
     <div>
      {/* <Button name="dowload do CV"/> */}
     </div>
     <button>Button</button>
    </header>
  );
};

export default HeaderLayout;