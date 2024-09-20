import axios from "axios";
import { GiArchiveResearch } from "react-icons/gi";

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
        return data;
    }
    // async function getInitial(){
    //     const data = 
    // }
    return {

        getDetail,
        getSearch
    }
}