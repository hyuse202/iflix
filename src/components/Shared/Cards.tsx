/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Media } from "@/types/type";
import {useRouter} from "next/navigation";
interface CardsProps {
  defaultCard?: boolean;
  item: Media;
}

export default function Cards({
  defaultCard = true,
  item,
}: CardsProps): React.ReactElement {
  const { id, title, poster, banner, rating } = item;
  const image = defaultCard ? banner : poster;
  const router = useRouter()
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1, opacity: 0.8 }}
        className=" col-span relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-row rounded"
        onClick={() => {
          router.push(
            `/info/${id}`
          )
        }}
      >
        <img
          src={image}
          alt="img"
          className=" 
        cursor-pointer
        object-cover
        
        
        shadow-xl
        rounded-md
        w-full
      "
        />
        <div
          className="
        opacity-0
        absolute
        top-0
        transition
        
        z-10
        invisible
        sm:visible
        w-full"
        >
          {/* <img
            src={image}
            alt="Movie"
            draggable={false}
            className="
          cursor-pointer
          object-cover
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        "
          /> */}
          {/* <div
            className="
          z-10
          p-2
          lg:p-4
          absolute
          w-full
          shadow-md
          rounded-b-md"
          >
            <div className="flex flex-row items-center gap-3 text-neutral-200">
              <strong className="">{title}</strong>
              <div className="flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm">
                <span className="">{`${rating * 10}% match`}</span>
              </div>
            </div>
          </div> */}
        </div>
      </motion.div>
    </>
  );
}
