import { FC } from 'react';
import styles from './styles/TableRow.module.scss';
import { TableRowProps } from './types';

const TableRow: FC<TableRowProps> = ({ image, title, freeServer, paidServer }) => {
   return (
      <tr className={styles.row}>
         <td className={styles.row__item}>
            <img src={image.path} alt={image.alt} />
         </td>
         <td className={styles.row__item}>
            <div className={styles.row__wrapper}>{title}</div>
         </td>
         <td className={styles.row__item}>{freeServer}</td>
         <td className={styles.row__item}>{paidServer}</td>
      </tr>
   );
};

export default TableRow;
