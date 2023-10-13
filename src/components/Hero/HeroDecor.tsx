import styles from './styles/HeroDecor.module.scss';
import { FC } from 'react';

import playerMaleImage from './assets/images/player-male.png';
import playerFemaleImage from './assets/images/player-female.png';

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
               src={playerFemaleImage}
               alt="Изображение игрока-женщины"
            />
         </div>
         <div className={`${styles.decor__player} ${styles.decor__player_male}`}>
            <img
               className={styles.decor__image}
               src={playerMaleImage}
               alt="Изображение игрока-мужчины"
            />
         </div>
      </div>
   );
};

export default HeroDecor;
