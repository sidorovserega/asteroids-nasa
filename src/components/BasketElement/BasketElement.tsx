import React, { useContext } from 'react';
import style from './BasketElement.module.css';
import Link from 'next/link';
import { Context } from '@/pages/_app';

type Props = {};

const BasketElement = ({}: Props) => {
  const { addedAsteroids } = useContext(Context);

  return (
    <div className={style.basket}>
      <div>
        <h2 className={style.basket__title}>Корзина</h2>
        <span className={style.basket__count}>{addedAsteroids.length} астероида</span>
      </div>
      <Link href="/basket" className={style.basket__link}>
        <button className={style.basket__button}>Отправить</button>
      </Link>
    </div>
  );
};

export default BasketElement;
