import React, { useEffect, useContext } from 'react';
import { GetStaticProps } from 'next';
import { Props } from '../interface/items.interface';
import Header from '@/components/Header/Header';
import style from '../styles/Pages.module.css';
import Image from 'next/image';
import AsteroidList from '@/components/AsteroidList/AsteroidList';
import BasketElement from '@/components/BasketElement/BasketElement';
import { Context } from './_app';
import { fetchAsteroids } from '@/axios';
import Services from '@/services/services';

interface HomeProps {
  asteroidListToDate: Props;
  nextList: string;
}

export function HomePage({ asteroidListToDate, nextList }: HomeProps): JSX.Element {
  const { asteroidsList, hundleAsteroidsList, setNextList } = useContext(Context);

  useEffect(() => {
    if (asteroidsList.length === 0) {
      const str = Object.keys(asteroidListToDate.near_earth_objects)[0];
      hundleAsteroidsList && hundleAsteroidsList(asteroidListToDate.near_earth_objects[str]);
      setNextList && setNextList(asteroidListToDate.links.prev);
    }
  }, []);

  return (
    <>
      <Header />
      <main className={style.main}>
        <Image
          className={style.main__img}
          src="../assets/img/planeta_zemlia_kosmos.png"
          width={400}
          height={620}
          alt="Изображение планеты Земля"
        />
        <AsteroidList />
        <BasketElement />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAsteroids(Services.fetchDateNow());

  return {
    props: {
      asteroidListToDate: data,
      nextList: data.links.prev,
    },
  };
};

export default HomePage;
