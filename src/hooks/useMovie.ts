import axios from "axios";
import { Media } from "@/types/type";

export default function useMovie() {
    const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB;
    let API = {
        DETAIL: 'https://api.themoviedb.org/3/movie/',
        SEARCH: 'https://api.themoviedb.org/3/search/movie?query='
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
        // console.log(data)
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
        // console.log(films)
        return films;
        // return data;
    }
    // async function getInitial(){
    //     const data = 
    // }
    return {

        getDetail,
        getSearch
    }
}