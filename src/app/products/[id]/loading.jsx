import React from 'react';

const loading = () => {
    return (
        <div className="card bg-base-100 shadow-lg p-6 lg:flex lg:flex-row gap-6 animate-pulse">
      {/* Image Skeleton */}
      <div className="lg:w-1/2">
        <div className="w-full h-80 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Content Skeleton */}
      <div className="lg:w-1/2 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        <div className="flex gap-2">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>

        <div className="h-6 bg-gray-200 rounded w-40"></div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>

        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
    );
};

export default loading;