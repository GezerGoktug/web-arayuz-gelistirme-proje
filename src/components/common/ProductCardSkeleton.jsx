const ProductCardSkeleton = () => {
  return (
    <div className="bg-slate-100 p-2 rounded-lg animate-pulse">
      <div className="relative overflow-hidden rounded-md">
        <div className="h-48 bg-gray-300 rounded-md w-full"></div>
        <div className="absolute top-2 right-2 bg-gray-300 w-8 h-8 rounded-full"></div>
      </div>

      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="h-8 bg-gray-300 rounded w-24"></div>
        <div className="h-8 bg-gray-300 rounded w-8"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
