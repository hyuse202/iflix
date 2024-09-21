"use client";
import React, { useState, useEffect } from "react";
import useMovie from "@/hooks/useMovie";
import Cards from "@/components/Shared/Cards";
import { Media } from "@/types/type";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";
export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState<Media[]>([]);
  const [loading, setLoading] = useState(false);
  const { getSearch } = useMovie();
  useEffect(() => {
    if (search === "") return setSearchFilter([]);
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      const data = await getSearch(search);
      setSearchFilter(data);
      setLoading(false);
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
        <h1 className="text-neutral-300 text-2xl mt-20">Search</h1>
        <input
          className="w-1/2 bg-transparent mt-6 placeholder:font-italitc rounded-2xl py-2 pl-4 pr-12 focus:outline-none border-2 focus:border-white border-gray-400"
          placeholder="Type to search..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {
          (searchFilter.length === 0 && search !== '') || loading ? (
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <LoadingSkeleton/>
              <LoadingSkeleton/>
              <LoadingSkeleton/>
              <LoadingSkeleton/>
              <LoadingSkeleton/>
            </div>
          ) :
          searchFilter.length > 0 ? (
            <div className="flex flex-wrap justify-around sm:justify-center gap-3 mt-10">
              {searchFilter?.map((item: any, index: any) => {
                return <Cards key={index} defaultCard={true} item={item} />;
              })}
            </div>
          ) : (
            "..."
          )}
        </div>
        
      </div>
    </>
  );
}
