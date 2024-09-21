"use client";
import { useEffect, useState } from "react";
import { Media } from "@/types/type";
import Cards from "@/components/Shared/Cards";
import useMovie from "@/hooks/useMovie";
import LoadingSkeleton from "./LoadingSkeleton";
export default function MovieList(): React.ReactElement {
  const [mediaPopular, setMediaPopular] = useState<Media[]>([]);
  const [mediaTrending, setMediaTrending] = useState<Media[]>([]);
  const [mediaTopRated, setMediaTopRated] = useState<Media[]>([]);
  const [loading, setLoading] = useState(false)
  const { getPopular, getTrending, getTopRated } = useMovie();
  async function getEndpoint() {
    setLoading(true);
    const resultPopular = await getPopular();
    const resultTrending = await getTrending();
    const resultTopRated = await getTopRated();
    setMediaPopular(resultPopular);
    setMediaTopRated(resultTopRated);
    setMediaTrending(resultTrending);
    setLoading(false);
  }
  useEffect(() => {
    getEndpoint();
  }, []);

  return (
    <div>
      <div className="mt-4 py-4 space-y-8 flex flex-col items-center px-2 md:px-8 lg:px-20">
        <h1 className="uppercase text-2xl gap-2 font-semibold mb-4">
          Top Rated
        </h1>
        {
          loading ? (
            <div className="flex flex-wrap gap-3">
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </div>
          ):
        <div className="flex flex-wrap justify-center gap-4">
          {mediaTopRated?.map((item, index) => {
            return <Cards key={index} defaultCard={true} item={item} />;
          })}
        </div>
        }
      </div>
      <div className="mt-4 py-4 space-y-8 flex flex-col items-center px-2 md:px-8 lg:px-20">
        <h1 className="uppercase text-2xl gap-2 font-semibold mb-4">
          Popular
        </h1>
        {
          loading ? (
            <div className="flex flex-wrap gap-3">
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </div>
          ):
        <div className="flex flex-wrap justify-around sm:justify-center gap-4">
          {mediaPopular?.map((item, index) => {
            return <Cards key={index} defaultCard={true} item={item} />;
          })}
        </div>}
      </div>
      <div className="mt-4 py-4 space-y-8 flex flex-col items-center  px-4 md:px-12 lg:px-20">
        <h1 className="uppercase text-2xl gap-2 font-semibold mb-4">
          Trending now
        </h1>
        {
          loading ? (
            <div className="flex flex-wrap gap-3">
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </div>
          ):
        <div className="flex flex-wrap justify-around sm:justify-center gap-4">
          {mediaTrending?.map((item, index) => {
            return <Cards key={index} defaultCard={true} item={item} />;
          })}
        </div>}
      </div>
    </div>
  );
}
