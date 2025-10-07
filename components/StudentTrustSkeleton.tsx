export default function StudentTrustSkeleton() {
  return (
    <section className="bg-[#F5F5FA] pb-16 pt-32 px-4 md:px-8">
      <div className="max-w-8xl mx-auto lg:mx-[8%] xl:mx-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 xl:gap-32 items-center">
          {/* Left Skeleton */}
          <div className="space-y-6 md:space-y-8 animate-pulse">
            <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 bg-[#45267F0A] p-5 md:p-6">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="h-6 w-full bg-gray-300 rounded"></div>
              ))}
            </div>
            <div className="h-10 w-48 bg-gray-300 rounded"></div>
          </div>

          {/* Right Skeleton */}
          <div className="relative h-[380px] md:h-[420px] lg:h-[480px] xl:h-[500px] animate-pulse">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-60 lg:w-80 lg:h-72 xl:w-[352px] xl:h-[337px] bg-gray-300 rounded-md shadow-lg"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-60 lg:w-96 lg:h-72 xl:w-[416px] xl:h-[337px] bg-gray-300 rounded-md shadow-lg"></div>
            <div className="absolute top-12 md:top-8 lg:top-6 left-8 md:left-20 lg:left-28 xl:left-32 bg-gray-200 rounded-md shadow-lg w-32 h-32"></div>
            <div className="absolute bottom-0 md:bottom-[-10px] left-[62%] md:left-[65%] lg:left-[68%] right-2 md:right-8 lg:right-10 bg-gray-300 rounded-md h-20 w-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
