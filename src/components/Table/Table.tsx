import { FC } from 'react';
import styles from './styles/Table.module.scss';
import TableRow from './TableRow';
import { data } from './data';

const Table: FC = () => {
   return (
      <table className={styles.table}>
         <thead className={styles.table__head}>
            <tr>
               <th colSpan={2}></th>
               <th className={styles.table__cell}>
                  <div className={styles.table__label}>Бесплатные сервера</div>
               </th>
               <th className={styles.table__cell}>
                  <div className={styles.table__label}>Подписочный сервер</div>
               </th>
            </tr>
         </thead>
         <tbody className={styles.table__body}>
            {data.map((el) => (
               <TableRow key={el.title} {...el} />
            ))}
         </tbody>
      </table>
   );
};

export default Table;
