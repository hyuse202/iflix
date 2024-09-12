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
    <div className="px-4 mt-4 space-y-8">
      <strong className="text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {name}
      </strong>
      <div className="grid grid-cols-4 gap-2">
        {media?.map((item, index) => {
          return <Cards key={index} defaultCard={defaultCard} item={item} />;
        })}
      </div>
    </div>
  );
}
