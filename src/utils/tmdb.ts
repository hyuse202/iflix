import axios from "axios";
import { Media } from "@/types/type";

const apiKey = process.env.NEXT_PUBLIC_TMDB;
const uri = "https://api.themoviedb.org/3";
export async function tmdb(param: string): Promise<Media[]> {
  const result = await axios.get(`${uri}${param}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const films: Media[] = [];
  result.data.results.map((item: any) => {
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
