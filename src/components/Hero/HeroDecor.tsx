import { FC } from 'react';
import styles from './styles/HeroDecor.module.scss';

const HeroDecor: FC = () => {
   return (
      <div className={styles.decor}>
         <div className={`${styles.decor__shadow} ${styles.decor__shadow_left}`} />
         <div className={`${styles.decor__shadow} ${styles.decor__shadow_right}`} />
         <div className={`${styles.decor__shadow} ${styles.decor__shadow_bottom}`} />
         <div className={styles.decor__glow} />
         <div className={`${styles.decor__player} ${styles.decor__player_female}`}>
            <img
               className={styles.decor__image}
               src="./src/components/Hero/assets/images/player-female.png"
               alt="Изображение игрока"
            />
         </div>
         <div className={`${styles.decor__player} ${styles.decor__player_male}`}>
            <img
               className={styles.decor__image}
               src="./src/components/Hero/assets/images/player-male.png"
               alt="Изображение игрока"
            />
         </div>
      </div>
   );
};

export default HeroDecor;
