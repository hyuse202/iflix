"use client";
import { useEffect, useState } from "react";
import { Media } from "@/types/type";
import Cards from "@/components/Shared/Cards";
import { tmdb } from "@/utils/tmdb";
interface ListProps {
  defaultCard?: boolean;
  name: string;
  endpoint: string;
}

export default function MovieList({
  defaultCard = true,
  name,
  endpoint,
}: ListProps): React.ReactElement {
  const [media, setMedia] = useState<Media[]>([]);
  async function getEndpoint() {
    const result = await tmdb(endpoint);
    setMedia(result);
  }
  useEffect(() => {
    getEndpoint();
  }, []);

  return (
    <div className="mt-4 py-4 space-y-8 flex flex-col items-center  px-4 md:px-12 lg:px-20">
      <h1 className="uppercase text-2xl gap-2 font-semibold mb-4">
        {name}
      </h1>
      <div className="flex flex-wrap justify-around sm:justify-center gap-4">
        {media?.map((item, index) => {
          return <Cards key={index} defaultCard={defaultCard} item={item} />;
        })}
      </div>
    </div>
  );
}
