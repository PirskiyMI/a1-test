import { TableRowProps } from './types';

import clockIcon from './assets/images/clock-icon.png';
import boxIcon from './assets/images/box-icon.png';
import runeIcon from './assets/images/rune-icon.png';
import symbolIcon from './assets/images/symbol-icon.png';
import batteryIcon from './assets/images/battery-icon.png';
import memoryIcon from './assets/images/memory-icon.png';
import vitoIcon from './assets/images/vito-icon.png';

export const data: TableRowProps[] = [
   {
      image: {
         path: clockIcon,
         alt: 'Часы',
      },
      title: 'Игровое время',
      freeServer: '-',
      paidServer: '30 дней',
   },
   {
      image: {
         path: boxIcon,
         alt: 'Набор инструментов',
      },
      title: 'Запечатанный набор инструментов',
      freeServer: '1',
      paidServer: '1',
   },
   {
      image: {
         path: runeIcon,
         alt: 'Руна',
      },
      title: 'Хрупкая чистая руна 10-й ступени',
      freeServer: '1',
      paidServer: '-',
   },
   {
      image: {
         path: symbolIcon,
         alt: 'Символ изобилия',
      },
      title: 'Большой символ изобилия творца',
      freeServer: '10',
      paidServer: '-',
   },
   {
      image: {
         path: batteryIcon,
         alt: 'Мана-батарея',
      },
      title: 'Мана-батарея',
      freeServer: '-',
      paidServer: '20',
   },
   {
      image: {
         path: memoryIcon,
         alt: 'Модуль памяти',
      },
      title: 'Модуль памяти',
      freeServer: '-',
      paidServer: '10',
   },
   {
      image: {
         path: vitoIcon,
         alt: 'Вито',
      },
      title: 'Помощник Вито',
      freeServer: '1',
      paidServer: '1',
   },
];
