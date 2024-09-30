import useLocalStorage from "@/hooks/useLocalStorage";

export default function ({ id, poster_path }: any) {
  const { setWatchedId } = useLocalStorage();
  const handleSetWatched = () => {
    // console.log(id);
    setWatchedId({
      id: id,
      poster_path: poster_path,
    });
  };
//   console.log(id);
  return (
    <>
      <button
        className="text-black bg-main-pink py-1 px-2 border-2 rounded-md border-black"
        onClick={handleSetWatched}
      >
        Add to favorite
      </button>
    </>
  );
}
