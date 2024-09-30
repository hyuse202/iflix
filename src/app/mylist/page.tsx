"use client"
import React, {useState, useEffect} from "react";
import Cards from "@/components/Shared/Cards";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function mylist(){
    const {getWatched} = useLocalStorage()
    const {movie, setMovie} = useState<any | null>();
    useEffect(() => {
        setMovie(getWatched())
    }, [])
    return movie !== null  && Object.keys(movie).length > 0 ?(
        <>
            <div className="flex flex-wrap gap-3 justify-center">
                {Object.keys(movie).map((key: any) => (
                    <Cards />
                ))}
            </div>
        </>
    ) : (  <></> )
}