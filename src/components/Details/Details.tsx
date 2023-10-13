import styles from './Details.module.scss';
import { FC } from 'react';
import Table from '../Table/Table';
import Glow from '../shared/Glow/Glow';
import MyButton from './../UI/my-button/MyButton';

import vitoImage from './assets/images/details-section-vito.svg';
import boxImage from './assets/images/details-section-box.png';

const Details: FC = () => {
   return (
      <section className={styles.details}>
         <div className={styles.details__container}>
            <img className={styles.details__image} src={vitoImage} alt="Вито" />
            <div className={styles.details__info}>
               <h2 className={styles.details__title}>набор «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>
               <Table />
               <div className={styles.details__order}>
                  <img src={boxImage} alt="Коллекционное издание" />
                  <div className={styles.details__payment}>
                     <span className={styles.details__price}>399 ₽</span>
                     <MyButton>приобрести</MyButton>
                  </div>
               </div>
            </div>
         </div>
         <Glow />
      </section>
   );
};

export default Details;
