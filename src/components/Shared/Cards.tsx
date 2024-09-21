/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Media } from "@/types/type";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";
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
  const router = useRouter();
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1, opacity: 0.8 }}
        className=" col-span relative w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6  flex flex-row rounded shadow-xl"
        onClick={() => {
          router.push(`/info/${id}`);
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
        w-full"
        />
      </motion.div>
    </>
  );
}
