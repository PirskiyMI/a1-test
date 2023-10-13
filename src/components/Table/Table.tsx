import { FC } from 'react';
import styles from './styles/Table.module.scss';
import { TableRowProps } from './types';
import TableRow from './TableRow';

const data: TableRowProps[] = [
   {
      image: {
         path: 'src/components/Table/assets/images/clock-icon.png',
         alt: 'Часы',
      },
      title: 'Игровое время',
      freeServer: '-',
      paidServer: '30 дней',
   },
   {
      image: {
         path: 'src/components/Table/assets/images/box-icon.png',
         alt: 'Набор инструментов',
      },
      title: 'Запечатанный набор инструментов',
      freeServer: '1',
      paidServer: '1',
   },
   {
      image: {
         path: 'src/components/Table/assets/images/rune-icon.png',
         alt: 'Руна',
      },
      title: 'Хрупкая чистая руна 10-й ступени',
      freeServer: '1',
      paidServer: '-',
   },
   {
      image: {
         path: 'src/components/Table/assets/images/symbol-icon.png',
         alt: 'Символ изобилия',
      },
      title: 'Большой символ изобилия творца',
      freeServer: '10',
      paidServer: '-',
   },
   {
      image: {
         path: 'src/components/Table/assets/images/battery-icon.png',
         alt: 'Мана-батарея',
      },
      title: 'Мана-батарея',
      freeServer: '-',
      paidServer: '20',
   },
   {
      image: {
         path: 'src/components/Table/assets/images/memory-icon.png',
         alt: 'Модуль памяти',
      },
      title: 'Модуль памяти',
      freeServer: '-',
      paidServer: '10',
   },
   {
      image: {
         path: 'src/components/Table/assets/images/vito-icon.png',
         alt: 'Вито',
      },
      title: 'Помощник Вито',
      freeServer: '1',
      paidServer: '1',
   },
];

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
