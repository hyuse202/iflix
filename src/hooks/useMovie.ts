import axios from "axios";

export default function useMovie() {
    const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB;
    let API = {
        DETAIL: 'https://api.themoviedb.org/3/movie/'
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
    return {
        getDetail
    }
}