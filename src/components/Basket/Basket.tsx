import React, { useContext } from 'react';
import style from '../Basket/Basket.module.css';
import { Context } from '../../pages/_app';
import CardBasket from '../CardBasket/CardBasket';

type Props = {};

const Basket = ({}: Props) => {
  
  const { addedAsteroids } = useContext(Context);
  
  return (
    <section className={style.basket__list}>
      <h1 className={style.basket__title}>Заказ отправлен!</h1>
      <ul className={style.cards}>
        {addedAsteroids.map((item, index) => (
          <CardBasket key={index} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Basket;
