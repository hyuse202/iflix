import MovieList from "@/components/Shared/MovieList";
import Banner from "@/components/Shared/Banner";
export default function Home(): React.ReactElement {
  return (
    <div>
      <Banner />
      <MovieList />
    </div>
  );
}
