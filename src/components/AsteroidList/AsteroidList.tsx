import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './AsteroidList.module.css';
import SelectionDistance from '../SelectionDistance/SelectionDistance';
import Card from '../Card/Card';
import { Context } from '@/pages/_app';
import { fetchAsteroids, fetchNextAsteroidList } from '@/axios';

interface HomeProps {}

const AsteroidList = ({}: HomeProps) => {
  const {
    hundleAdded,
    asteroidsList,
    hundleAsteroidsList,
    nextList,
    setNextList,
    isLoading,
    setIsLoading,
  } = useContext(Context);

  const [distanceActive, setDistanceActive] = useState('km');

  const lastElement = useRef<HTMLDivElement | null>(null);
  let observe = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observe.current) observe.current.disconnect();

    let callback = async (enteries: any, observe: any) => {
      if (enteries[0].isIntersecting) {
        setIsLoading && setIsLoading(true);
        const data = await fetchNextAsteroidList(nextList);
        const str: string = Object.keys(data.near_earth_objects)[0];
        hundleAsteroidsList && hundleAsteroidsList(data.near_earth_objects[str]);
        setNextList && setNextList(data.links.prev);
        setIsLoading && setIsLoading(false);
      }
    };
    observe.current = new IntersectionObserver(callback);
    observe.current.observe(lastElement.current as HTMLElement);
  }, [asteroidsList]);

  return (
    <>
      <section className={style.asteroids}>
        <h1 className={style.asteroids__title}>Ближайшие подлёты астероидов</h1>
        <SelectionDistance distanceActive={distanceActive} setDistanceActive={setDistanceActive} />
        <ul className={style.cards}>
          {asteroidsList.map((item, index) => (
            <Card
              key={index}
              item={item}
              distanceActive={distanceActive}
              hundleAdded={hundleAdded}
            />
          ))}
        </ul>
        {isLoading && <div className={style.loader}>Загрузка...</div>}
        <div ref={lastElement} />
      </section>
    </>
  );
};

export default AsteroidList;
