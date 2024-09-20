import MovieList from "@/components/Shared/MovieList";
import Banner from "@/components/Shared/Banner";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";
export default function Home(): React.ReactElement {
  return (
    <div>
      <Banner />
      <MovieList />
      <LoadingSkeleton />
    </div>
  );
}
