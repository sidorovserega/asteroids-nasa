import React from 'react';
import style from './CardBasket.module.css';
import Image from 'next/image';
import { Asteroid } from '@/interface/items.interface';
import ImgLittleAsteroid from '../../assets/img/little_asteroid.png';
import ImgBigAsteroid from '../../assets/img/big_asteroid.png';

type Props = {
  item: Asteroid
};

const CardBasket = ({item}: Props) => {

  return (
    <li className={style.card}>
      <span className={style.card__date}>{item.close_approach_data[0].close_approach_date_full.slice(0, item.close_approach_data[0].close_approach_date_full.indexOf(' ')+1)}</span>
      <div className={style.card__wrapper}>
        <div className={style.distance_container}>
          <span className={style.distance_container__distance}>{Math.round(Number(item.close_approach_data[0].miss_distance.lunar)) + ' лунных орбит'}</span>
          <svg className={style.distance_container__distance__svg} viewBox="0 0 105 6" fill="none">
            <path
              d="M0 3L5 5.88675L5 0.113249L0 3ZM105 3.00001L100 0.113257L100 5.88676L105 3.00001ZM4.5 3.5L100.5 3.50001L100.5 2.50001L4.5 2.5L4.5 3.5Z"
              fill="white"
              opacity="0.5"
            />
          </svg>
        </div>
        <Image
          className={style.card_img}
          src={Math.round(item.estimated_diameter.meters.estimated_diameter_min) < 50 ? ImgLittleAsteroid : ImgBigAsteroid}
          width={Math.round(item.estimated_diameter.meters.estimated_diameter_min) < 50 ? 22 : 36.7}
          height={Math.round(item.estimated_diameter.meters.estimated_diameter_min) < 50 ? 24 : 40}
          alt="Изображение небольшого астероида"
        />
        <div className={style.distance_container}>
          <span className={style.distance_container__date}>{item.name.slice(item.name.indexOf('(') + 1, item.name.indexOf(')'))}</span>
          <span className={style.distance_container__diameter}>{`Ø ${Math.round(item.estimated_diameter.meters.estimated_diameter_min)} м`}</span>
        </div>
      </div>
      <div className={style.card__wrapper}>
        <span className={style.card__dangeros}>{item.is_potentially_hazardous_asteroid ? '⚠ Опасен': ''}</span>
      </div>
    </li>
  );
};

export default CardBasket;
