import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col relative w-full items-center">
      <div className="w-full h-full relative flex flex-col items-center justify-center">
        <Suspense
          fallback={
            <div className="w-full object-cover lg:h-[500px] h-[300px] bg-black"></div>
          }
        >
          <video
            src="/home/mutts_vid.mp4"
            preload="true"
            className="w-full h-full object-cover lg:max-h-[500px] max-h-[300px]"
            autoPlay
            playsInline
            loop
            muted
          >
            Not Supported
          </video>
          <div className="flex items-center justify-center p-4 rounded-lg bg-primary lg:text-8xl sm:text-7xl xs:text-5xl text-3xl shadow-lg bottom-0 translate-y-1/2 text-white text-center absolute">
            <h1 id="h-txt">Home of the Maia Mutts</h1>
          </div>
        </Suspense>
      </div>
      <div className="w-full h-96"></div>
      <div className="w-full h-96"></div>
      <div className="w-full h-96"></div>
      <div className="w-full h-96"></div>
    </div>
  );
}
