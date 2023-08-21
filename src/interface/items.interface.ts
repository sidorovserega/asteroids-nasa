
export interface Asteroid {
  id: string,
  name: string;
  is_potentially_hazardous_asteroid: boolean;
  estimated_diameter: {
    meters: {
      estimated_diameter_min: number;
    };
  };
  close_approach_data: {
    close_approach_date_full: string;
    miss_distance: {
      kilometers: string,
      lunar: string
    };
  }[];
}

export interface Props {
  near_earth_objects: {
    [dateActive: string]: Asteroid[];
  };
  links: {
    prev: string;
  };
}
