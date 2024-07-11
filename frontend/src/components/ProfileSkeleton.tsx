
const ProfileSkeleton = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 relative animate-pulse">
        <div className="absolute top-4 right-4 h-10 w-20 bg-gray-300 rounded-lg"></div>
        <div className="h-10 bg-gray-300 rounded w-1/3 mb-6 mx-auto"></div>
        <div className="mb-6">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="mb-6">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="mb-6">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="mb-6">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="mb-6">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="space-y-4">
            <div className="h-6 bg-gray-300 rounded w-full"></div>
            <div className="h-6 bg-gray-300 rounded w-full"></div>
            <div className="h-6 bg-gray-300 rounded w-full"></div>
            <div className="h-6 bg-gray-300 rounded w-full"></div>
            <div className="h-6 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
