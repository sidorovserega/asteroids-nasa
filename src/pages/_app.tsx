import { Asteroid } from '@/interface/items.interface';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MutableRefObject, createContext, useRef, useState } from 'react';

interface IContext {
  addedAsteroids: Asteroid[];
  hundleAdded?: (item: Asteroid) => void;
  asteroidsList: Asteroid[];
  hundleAsteroidsList?: (items: Asteroid[]) => void,
  nextList: string,
  setNextList?: (url: string) => void,
  isLoading: boolean,
  setIsLoading?: (load: boolean) => void,
}

export const Context = createContext<IContext>({
  addedAsteroids: [],
  asteroidsList: [],
  nextList: '',
  isLoading: false
});

export default function App({ Component, pageProps }: AppProps) {
  const [addedAsteroids, setAddedAsteroids] = useState<Asteroid[]>([]);

  const [asteroidsList, setAsteroidsList] = useState<Asteroid[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [nextList, setNextList] = useState('');

  const hundleAdded = (item: Asteroid) => {
    setAddedAsteroids([...addedAsteroids, item]);
  };

  const hundleAsteroidsList = (items: Asteroid[]) => {
    setAsteroidsList([...asteroidsList, ...items]);
  };

  return (
    <Context.Provider
      value={{
        addedAsteroids,
        hundleAdded,
        asteroidsList,
        hundleAsteroidsList,
        nextList,
        setNextList,
        isLoading,
        setIsLoading
      }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
