import React from 'react';
import style from '../../styles/asteroidPage.module.css';
import Image from 'next/image';
import ImgLittleAsteroid from '../../assets/img/little_asteroid.png';
import ImgBigAsteroid from '../../assets/img/big_asteroid.png';
import { GetServerSideProps } from 'next';
import { Asteroid } from '@/interface/items.interface';
import { fetchAsteroidInfo } from '@/axios';

type Props = {
  data: Asteroid;
};

const AsteroidPage = ({ data }: Props) => {
  console.log(data);

  const kilometers = String(
    Math.round(Number(data.close_approach_data[0].miss_distance.kilometers)),
  );
  let formatterKilometers = Array.from(kilometers)
    .reverse()
    .reduce((sum, sym, index) => (index % 3 !== 0 ? sum + sym : sum + ' ' + sym))
    .split('')
    .reduceRight((sum, sym) => sum + sym);

  return (
    <div className={style.container}>
      <div className={style.name}>
        {'Название ' + data.name.slice(data.name.indexOf('(') + 1, data.name.indexOf(')'))}
      </div>

      <div className={style.date}>
        {'Дата снимка: ' +
          data.close_approach_data[0].close_approach_date_full.slice(
            0,
            data.close_approach_data[0].close_approach_date_full.indexOf(' ') + 1,
          )}
      </div>

      <div className={style.distance}>{`Расстояние до земли: ${formatterKilometers} км`}</div>

      <div className={style.diametr}>
        {`Диаметр: Ø ${Math.round(data.estimated_diameter.meters.estimated_diameter_min)} м`}
      </div>
      <div className={style.dangeros}>
        {data.is_potentially_hazardous_asteroid ? '⚠ Опасен' : ''}
      </div>
    </div>
  );
};

export default AsteroidPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchAsteroidInfo(context.params.id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
