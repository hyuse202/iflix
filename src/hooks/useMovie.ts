import axios from "axios";
import { Media } from "@/types/type";

export default function useMovie() {
    const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB;
    const TMDB_URI = 'https://api.themoviedb.org/3'
    const API = {
        DETAIL: TMDB_URI +  '/movie/',
        SEARCH: TMDB_URI + '/search/movie?query=',
        POPULAR: TMDB_URI + '/movie/popular',
        TOP_RATED: TMDB_URI + '/movie/top_rated',
        TRENDING: TMDB_URI + "/trending/all/day",
        RECOMMENDATION: TMDB_URI + "/movie"
    }
    async function getDetail(id: number){
        const data = await axios.get(API.DETAIL + id + '?language=en-US',{
            headers: {
                'Authorization': `Bearer ${TMDB_KEY}`,
                'Accept': 'application/json'
              }
        })
        return data;
    }
    async function getSearch(querry: string){
        const data = await axios.get(API.SEARCH + querry + '&include_adult=false&language=en-US&page=1',{
            headers: {
                'Authorization': `Bearer ${TMDB_KEY}`,
                'Accept': 'application/json'
              }        
        })
        const films: Media[] = [];
        data.data.results.map((item: any) => {
          films.push({
            id: item.id,
            title: item.title || item.name,
            overview: item.overview,
            rating: item.vote_average,
            banner: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            poster: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          });
        });
        return films;
    }
    async function getTopRated(){
        const data = await axios.get(API.TOP_RATED, {
            headers: {
                'Authorization': `Bearer ${TMDB_KEY}`,
                'Accept': 'application/json'
              }     
        })
        const films: Media[] = [];
        data.data.results.map((item: any) => {
          films.push({
            id: item.id,
            title: item.title || item.name,
            overview: item.overview,
            rating: item.vote_average,
            banner: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            poster: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          });
        });
        return films;
    }
    async function getPopular(){
        const data = await axios.get(API.POPULAR, {
            headers: {
                'Authorization': `Bearer ${TMDB_KEY}`,
                'Accept': 'application/json'
              }     
        })
        const films: Media[] = [];
        data.data.results.map((item: any) => {
          films.push({
            id: item.id,
            title: item.title || item.name,
            overview: item.overview,
            rating: item.vote_average,
            banner: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            poster: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          });
        });
        return films;
    }
    async function getTrending(){
        const data = await axios.get(API.TRENDING, {
            headers: {
                'Authorization': `Bearer ${TMDB_KEY}`,
                'Accept': 'application/json'
              }     
        })
        const films: Media[] = [];
        data.data.results.map((item: any) => {
          films.push({
            id: item.id,
            title: item.title || item.name,
            overview: item.overview,
            rating: item.vote_average,
            banner: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            poster: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          });
        });
        return films;
    }
    async function getRecommendation(id: number){
      const data = await axios.get(API.RECOMMENDATION + "/" + id + "/recommendations?language=en-US&page=1",{
        headers: {
          'Authorization': `Bearer ${TMDB_KEY}`,
          'Accept': 'application/json'
        }
      })
      const films: Media[] = [];
        data.data.results.map((item: any) => {
          films.push({
            id: item.id,
            title: item.title || item.name,
            overview: item.overview,
            rating: item.vote_average,
            banner: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            poster: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          });
        });
        console.log(films);
        return films;
    }
    return {
        getDetail,
        getSearch,
        getPopular,
        getTopRated,
        getTrending,
        getRecommendation
    }
}