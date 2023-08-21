import React from 'react';
import style from './SelectionDistance.module.css';

type Props = {
  distanceActive: string;
  setDistanceActive: (str: string) => void;
};

const SelectionDistance = ({ distanceActive, setDistanceActive }: Props) => {
  
  return (
    <div className={style.selection_distance}>
      <span
        onClick={() => setDistanceActive('km')}
        className={
          distanceActive === 'km'
            ? style.selection_distance__item + ' ' + style.active
            : style.selection_distance__item
        }>
        в километрах
      </span>
      <span className={style.selection_distance__separator}></span>
      <span
        onClick={() => setDistanceActive('')}
        className={
          distanceActive !== 'km'
            ? style.selection_distance__item + ' ' + style.active
            : style.selection_distance__item
        }>
        в лунных орбитах
      </span>
    </div>
  );
};

export default SelectionDistance;
