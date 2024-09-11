export type Genre = {
    id: number;
    name: string;
  };
  
  export enum MediaType {
    MOVIE = 'movie',
    TV = 'tv',
  }
  
  export type Media = {
    id: number;
    title: string;
    overview: string;
    poster: string;
    banner: string;
    rating: number;
  };
  
  export type ImageType = 'poster' | 'original';
  
  export type Section = {
    heading: string;
    endpoint: string;
    defaultCard?: boolean;
    topList?: boolean;
  };