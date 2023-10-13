import styles from './Details.module.scss';
import { FC } from 'react';
import Table from '../Table/Table';
import Glow from '../shared/Glow/Glow';
import MyButton from './../UI/my-button/MyButton';

const Details: FC = () => {
   return (
      <section className={styles.details}>
         <div className={styles.details__container}>
            <img
               className={styles.details__image}
               src="./src/components/Details/assets/images/details-section-vito.svg"
               alt="Вито"
            />
            <div className={styles.details__info}>
               <h2 className={styles.details__title}>набор «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>
               <Table />
               <div className={styles.details__order}>
                  <img
                     src="./src/components/Details/assets/images/details-section-box.png"
                     alt="Коллекционное издание"
                  />
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
