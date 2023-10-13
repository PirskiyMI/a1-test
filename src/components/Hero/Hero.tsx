import { FC } from 'react';
import styles from './styles/Hero.module.scss';
import HeroDecor from './HeroDecor';
import Glow from '../shared/Glow/Glow';

const Hero: FC = () => {
   return (
      <section className={styles.hero}>
         <div className={styles.hero__container}>
            <div className={styles.hero__images}>
               <a className={styles.hero__logo} href="#">
                  <img src="./assets/images/hero-logo.png" alt="Аллоды" />
               </a>
               <img
                  className={styles.hero__image}
                  src="./assets/images/hero-boxes.png"
                  alt="Коллекционное издание"
               />
            </div>
            <h1 className={styles.hero__title}>Коллекционные издания</h1>
            <p className={styles.hero__text}>
               Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов
               Онлайн»!
            </p>
         </div>
         <HeroDecor />
         <Glow />
      </section>
   );
};

export default Hero;
