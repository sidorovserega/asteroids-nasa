import React from 'react';
import Image from 'next/image';
import style from './Header.module.css';

type Props = {};

function Header({}: Props) {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <Image
          className={style.header__container__logo}
          src="../../assets/img/ARMAGEDDON_2023.png"
          width={288}
          height={32}
          alt="Логотип _ ARMAGEDON 2023"
        />
        <p className={style.header__container__main_title}>
          ООО “Команда им. Б. Уиллиса”.
          <br />
          Взрываем астероиды с 1998 года.
        </p>
      </div>
    </header>
  );
}

export default Header;
