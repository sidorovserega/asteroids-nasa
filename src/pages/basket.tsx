import Basket from '@/components/Basket/Basket';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import React from 'react';
import style from '../styles/Pages.module.css';
import ImagePlainet from '../assets/img/planeta_zemlia_kosmos.png';

type Props = {};

const BasketPage = ({}: Props) => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Image
          className={style.main__img}
          src={ImagePlainet}
          width={400}
          height={620}
          alt="Изображение планеты Земля"
        />
        <Basket />
      </main>
    </>
  );
};

export default BasketPage;
