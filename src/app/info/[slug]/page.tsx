import React from "react";
type Props = {
  params: { slug: string };
};
import useMovie from "@/hooks/useMovie";
export default async function page({ params }: Props) {
  const id: any = params.slug;
  const { getDetail } = useMovie();
  const info: any = await getDetail(id);
  return (
    <>
      {/* <div className="bg-black min-h-screen"> */}
      <div className="mb-6 w-full grow md:mb-12 xl:mx-auto xl:mb-32 xl:max-w-screen-xl xl:px-12">
        <div className="absolute left-0 top-0 -z-10 h-64 w-full overflow-hidden md:h-80 lg:h-96">
          <div className="relative h-full w-full">
            <div className="absolute bottom-0 left-0 z-30 h-full w-full bg-gradient-to-t from-gray-50 dark:from-gray-950"></div>

            <div
              className="h-full w-full blur-xl"
              style={{
                background:
                  "conic-gradient(from 180deg, rgb(68, 53, 54) 0deg, rgb(152, 92, 72) 360deg)",
                transform: "scale(1.5) translateX(-5%)",
              }}
            ></div>
          </div>
        </div>

        <div className="mx-6 mb-6 mt-40 flex items-center gap-3 md:mx-12 md:mt-48 md:gap-5 lg:mt-56 lg:gap-8 xl:mx-auto xl:mb-10 ">
          <div className="w-28 shrink-0 md:w-36 lg:w-48">
            <div
              className="relative w-full"
            >
              <img
                className="h-full w-full rounded-lg object-cover shadow-lg"
                src={`https://image.tmdb.org/t/p/w500` + info?.data.poster_path}
                alt="Fairy Tail 100 Year Quest Poster"
                sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 192px"
              />
            </div>
          </div>
          <div className="pt-44">
            <p className="text-xs">
              {info?.data.release_date} · {info.data.runtime}'
            </p>
            <h1 className="text-2xl font-bold leading-6 md:text-4xl md:leading-9 lg:text-5xl lg:leading-normal">
              {info?.data.title}
            </h1>
            <p className="mb-0.5 leading-5 md:leading-normal lg:mb-1">
              Currently Airing
            </p>
          </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">

          <div className="mx-6 md:mx-12 xl:mx-0">
            <h2 className="mb-3 mt-2 border-l-[6px] border-emerald-500 pl-3 text-xl font-bold md:mb-4 md:text-2xl xl:mb-6">
              Overview
            </h2>
            <p>
              {info?.data.overview}
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
