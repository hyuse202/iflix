import MovieList from "@/components/Shared/MovieList";
import { sections } from "../constant/section";
import Banner from "@/components/Shared/Banner";
export default function Home(): React.ReactElement {
  return (
    <div>
        <Banner />
        {sections?.map((item, index) => {
          return (
            <MovieList key={index} endpoint={item.endpoint} name={item.name} />
          );
        })}
    </div>
  );
}
