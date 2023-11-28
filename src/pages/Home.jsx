import React, { useState } from 'react';
import styles from '../styles/pages/Home.module.scss';
import { Heading3, Heading2, Heading1, Paragrafo } from '../components/_ui/Header';
import Button from '../components/_ui/Button';
import Link from '../components/_ui/Link';
import { CssIcon, HtmlIcon, PhpIcon } from '../components/_ui/SvgIcons';

const Section = ({ children }) => (
  <section className={styles['grid-container']}>{children}</section>
);

const ContentItem = ({ image, children }) => (
  <div className={styles['item']}>
    <div className={styles['caixa']}>
      <img src={image} alt="Imagem" />
    </div>
    {children}
  </div>
);

const SectionContent = ({ activeSection }) => {
  return (
    <div className={`${styles['section-content']} ${activeSection}`}>
      {activeSection === 'sobre' && (
        <>
          <Heading2>Minha Jornada</Heading2>
          <Paragrafo>A paixão pela tecnologia despertou em mim aos 18 anos, e agora, aos 21, essa chama só cresceu. Tudo começou quando decidi criar um site para o meu canal, marcando meu primeiro contato com HTML e CSS.</Paragrafo>
          <Paragrafo>Em 2020, defini que a área da tecnologia seria meu caminho e meu objetivo de formação. Desde então, tenho me dedicado aos estudos incessantemente, buscando aprimorar meu conhecimento constantemente.</Paragrafo>

          <div className={styles.skill}>
            <Heading3>Minhas Skills</Heading3>
            <div className={styles.skills}>
              <HtmlIcon />
              <CssIcon />
              <PhpIcon />
            </div>
          </div>

        </>
      )}
      {activeSection === 'experiencia' && (
        <>
          <Heading2>Experiência Profissional</Heading2>
          <Paragrafo>Como profissional independente e freelancer, acumulei uma rica variedade de experiências. Destaco meu envolvimento em projetos de grande porte, incluindo a criação de páginas únicas de impacto.</Paragrafo>
          <Paragrafo>Além disso, minha jornada profissional tem sido marcada por diversas colaborações em projetos desafiadores, nos quais pude aplicar meu conhecimento em tecnologias como HTML e CSS de maneira eficaz. Cada desafio enfrentado contribuiu para o meu crescimento profissional, aprimorando minhas habilidades e me permitindo oferecer soluções criativas e eficientes.</Paragrafo>
          <Paragrafo>Estou sempre em busca de novas oportunidades para expandir meu portfólio e enfrentar desafios que impulsionem ainda mais meu desenvolvimento profissional.</Paragrafo>
        </>
      )}
      {activeSection === 'habilidade' && (
        <>
          <Heading2>Habilidades Técnicas</Heading2>
          <Paragrafo>Minhas habilidades técnicas abrangem um amplo espectro, destacando minha proficiência avançada em HTML com foco especial na semântica. Além disso, possuo conhecimento sólido em CSS, JavaScript e frameworks como React e Next, que potencializam minha capacidade de criar experiências web dinâmicas e envolventes.</Paragrafo>
          <Paragrafo>No âmbito do backend, domino PHP e MySQL, utilizando meu conhecimento para criar soluções robustas e eficientes. A integração de AJAX e SQL complementa minha habilidade de desenvolver aplicações interativas e responsivas.</Paragrafo>
          <Paragrafo>Estou comprometido em manter-me atualizado com as tendências tecnológicas, buscando constantemente aprimorar e expandir meu conjunto de habilidades.</Paragrafo>
        </>
      )}
    </div>
  );
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('sobre');

  const showSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='active-home'>
      <Section>
        {/* Seção principal da página inicial */}
        <div className={styles['item-1']}>
          <header className={styles.headers}>
            <Heading2>Bem vindo ao meu portfólio</Heading2>
            <Heading1>Sou um desenvolvedor web e a solução que você procura chegou!</Heading1>
            <Paragrafo>Olá, e obrigado por visitar meu portfólio! Sou um entusiasta apaixonado por desenvolvimento web, dedicado a criar soluções digitais impactantes e envolventes.</Paragrafo>
          </header>
          <div className={styles.buttons}>
            <Button className={'buttonHeader'}>Visulizar CV</Button>
            <Link className={'LinkRound'}></Link>
            <Button className={'buttonHeader'}>Download do CV pdf</Button>
          </div>
        </div>
        <div className={styles['item-2']}>
          <div className={styles.t}>
            <ContentItem image="./perfil.png"></ContentItem>
          </div>
        </div>
      </Section>
      <section className={styles['about-container']}>
        <div className={styles['item-1']}>
          <ContentItem image="./perfil.png"></ContentItem>
        </div>
        <div className={styles['item-2']}>
          <header className={styles.headers}>
            <div className={styles.right}>
              <Button className={'buttonHeader'} onClick={() => showSection('sobre')}>Sobre</Button>
              <Button className={'buttonHeader'} onClick={() => showSection('experiencia')}>Experiência</Button>
              <Button className={'buttonHeader'} onClick={() => showSection('habilidade')}>Habilidade</Button>
            </div>
            <SectionContent activeSection={activeSection} />
            <div className={styles.right}>
              <Button className={'buttonHeader'}>Saiba Mais</Button>
            </div>
          </header>
        </div>
      </section>
      <section className={styles['service-container']}>
        <Heading2>Meus Serviçoes</Heading2>
        <div className={styles['service-grid']}>

          <div className={styles['item-1']}>
            <div className={styles.header}>
            <Heading3>Design de Interface (UI/UX)</Heading3>
            <Paragrafo>Com habilidades especializadas, desenvolvo designs de sites utilizando a avançada ferramenta Figma, assegurando uma experiência intuitiva e cativante para os usuários</Paragrafo>
            </div>
            <div className={styles.button}>
              <Button>Entre em Contato</Button>
            </div>
          </div>
          <div className={styles['item-2']}>
            <div className={styles.header}>
            <Heading3>Desenvolvimento Front-end</Heading3>
            <Paragrafo>Com mais de 2 anos de experiência como programador front-end, trago expertise para transformar conceitos em interfaces interativas e envolventes.</Paragrafo>
            </div>
            <div className={styles.button}>
              <Button>Entre em Contato</Button>
            </div>
          </div>
          <div className={styles['item-3']}>
            <div className={styles.header}>
            <Heading3>Desenvolvedor Back-end</Heading3>
            <Paragrafo>Com mais de 1 ano de atuação como programador back-end, ofereço soluções robustas e eficientes para a construção do lado server das aplicações.</Paragrafo>
            </div>
            <div className={styles.button}>
              <Button>Entre em Contato</Button>
            </div>
          </div>
          <div className={styles['item-4']}>
            <div className={styles.header}>
            <Heading3>Administração de Banco de Dados</Heading3>
            <Paragrafo>Embora tenha realizado cursos na área de administração de banco de dados, ainda não explorei essa habilidade profissionalmente. Estou pronto para novos desafios e aprendizados.</Paragrafo>
            </div>
            <div className={styles.button}>
              <Button>Entre em Contato</Button>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;
