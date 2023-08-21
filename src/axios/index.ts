import { Asteroid, Props } from '@/interface/items.interface';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

export const fetchAsteroids = async (dateActive: string): Promise<Props> => {
  const { data } = await axios.get<Props>(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateActive}&end_date=${dateActive}&api_key=WAKLSJLo13ivmNRNuyOHk8ohMvPrhMO1uNFRlV2H`,
  );
  return data;
};

export const fetchNextAsteroidList = async (url: string): Promise<Props> => {
  const { data } = await axios.get<Props>(`${url}`);
  return data;
};

export const fetchAsteroidInfo = async (id: string | undefined | string[]): Promise<Asteroid> => {
  const { data } = await axios.get<Asteroid>(
    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=WAKLSJLo13ivmNRNuyOHk8ohMvPrhMO1uNFRlV2H`,
  );
  return data;
};