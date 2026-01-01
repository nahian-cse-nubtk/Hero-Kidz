import React from "react";

const SkeletonCard = () => {
  return (
    <div className="card bg-base-100 shadow-md animate-pulse">
      <div className="h-52 bg-gray-200 rounded-t-xl"></div>

      <div className="card-body p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        <div className="flex gap-2">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="h-9 w-24 bg-gray-200 rounded"></div>
          <div className="h-9 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
