import styles from './MyButton.module.scss';
import { FC } from 'react';
import { MyButtonProps } from './types';

const MyButton: FC<MyButtonProps> = ({ children }) => {
   return <button className={styles.button}>{children}</button>;
};

export default MyButton;
