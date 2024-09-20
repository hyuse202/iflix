"use client"
import React, { useState, useEffect } from "react";
import useMovie from "@/hooks/useMovie";
export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState<any>([]);
  // const [loading, setLoading] = useState(false);
  const { getSearch } = useMovie();
  useEffect(() => {
    if (search === "") return setSearchFilter([]);
    const delayDebounceFn = setTimeout(async () => {
      // setLoading(true);
      const data = await getSearch(search);
      console.log(data.data);
      setSearchFilter(data.data.results.slice(0, 4));
      // setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [search]);

  const handleSearchCallback = () => {
    setSearch("");
    setSearchFilter([]);
  };
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col justify-center items-center text-neutral-100">
        <h1 className="text-neutral-300 text-2xl">Search</h1>
        <input
          className="w-1/2 bg-transparent placeholder:font-italitc rounded-2xl py-2 pl-4 pr-12 focus:outline-none border-2 focus:border-white border-gray-400"
          placeholder="Type to search..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}
