/* eslint-disable @next/next/no-img-element */

import { Media } from "@/types/type";
interface CardsProps {
  defaultCard?: boolean;
  item: Media;
}

export default function Cards({
  defaultCard = true,
  item,
}: CardsProps): React.ReactElement {
  const { title, poster, banner, rating } = item;
  const image = defaultCard ? banner : poster;

  return (
    <>
      <div className='group bg-zinc-900 col-span relative h-[12vw] flex flex-row rounded'>
        <img
          src={image}
          alt='img'
          className=' 
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]'
        />
        <div
          className='
        opacity-0
        absolute
        top-0
        transition
        duration-500
        z-10
        invisible
        sm:visible
        delay-200
        w-full
        scale-0
        group-hover:scale-125
        group-hover:-translate-y-[3vw]
        group-hover:translate-x-[1vw]
        group-hover:opacity-100'
        >
          <img
            src={image}
            alt='Movie'
            draggable={false}
            className='
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        '
          />
          <div
            className='
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md'
          >
            <div className='flex flex-row items-center gap-3'>
              <strong className=''>{title}</strong>
              <div className='flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm'>
                <span className=''>{`${rating * 10}% match`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}