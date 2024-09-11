import MovieList from "@/components/Shared/MovieList";
import { sections } from "./constant/section";
export default function Home(): React.ReactElement {
  return (
    <div>
        {sections?.map((item, index) => {
          return (
            <MovieList key={index} endpoint={item.endpoint} name={item.name} />
          );
        })}
    </div>
  );
}
