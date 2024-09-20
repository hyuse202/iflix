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
      {/* <motion.div
        whileHover={{ scale: 1.1, opacity: 0.8 }}
        className=" col-span relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-row rounded"
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
        w-full
      "
        /> */}
        {/* <motion.div
          className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlay />
        </motion.div> */}
         {/* <motion.div
        className=" col-span relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-row rounded"
        // initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      /> */}
      {/* <motion.img
        src={image}
        alt="Hover Image"
        className="        cursor-pointer
        object-cover
        
        
        shadow-xl
        rounded-md
        w-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <FaPlay />
      </motion.div> */}
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
        {/* <motion.div
        className="absolute inset-0 bg-blue-500 opacity-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      /> */}

      {/* Play Button */}
      {/* <motion.div
        className="absolute inset-100 flex items-center justify-center text-white text-4xl opacity-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <FaPlay />
      </motion.div> */}
        </motion.div>
    </>
  );
}
