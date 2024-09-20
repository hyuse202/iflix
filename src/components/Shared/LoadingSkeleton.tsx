import React from "react";

export default function LoadingSkeleton() {
  return (
    <>
      <div className="animate-pulse">
        <div className="h-[23rem] relative w-[15rem] bg-gray-300 rounded-md"></div> 
      </div>
    </>
  );
}
