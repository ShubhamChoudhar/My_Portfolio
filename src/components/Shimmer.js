const Shimmer = () => {
    return (
        <div className = "flex flex-wrap justify-center items-center">
          {Array(10).fill("").map((_, index) => (
            <div key={index} className = "shimmer-card bg-gray-300 w-64 h-64 m-4 p-6 rounded-md shadow-md">
              <div className = "shimmer-wave bg-gray-400 h-4 mb-4 rounded-md"></div>
              <div className = "shimmer-wave bg-gray-400 h-4 mb-4 rounded-md"></div>
              <div className = "shimmer-wave bg-gray-400 h-4 mb-4 rounded-md"></div>
              <div className = "shimmer-wave bg-gray-400 h-4 rounded-md"></div>
            </div>
          ))}
        </div>
      );
};

export default Shimmer;