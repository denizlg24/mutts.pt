"use client";
import Delayed from "@/components/Delayed";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col relative w-full items-center">
      <div className="w-full h-full relative flex flex-col items-center justify-center">
        <Suspense
          fallback={
            <div className="w-full object-cover lg:h-[500px] h-[300px] bg-background"></div>
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
            <div id="h-txt" className="relative w-full">
              <span
                id="h-txt"
                className="w-max relative text-white opacity-0 pointer-events-none"
              >
                Home of the Maia Mutts
              </span>
              <span id="h-txt" className="absolute w-max left-0 top-0">
                <Delayed delay={300}>H</Delayed>
                <Delayed delay={350}>o</Delayed>
                <Delayed delay={400}>m</Delayed>
                <Delayed delay={450}>e</Delayed>
                <Delayed delay={500}> </Delayed>
                <Delayed delay={550}>o</Delayed>
                <Delayed delay={600}>f</Delayed>
                <Delayed delay={650}> </Delayed>
                <Delayed delay={700}>t</Delayed>
                <Delayed delay={750}>h</Delayed>
                <Delayed delay={800}>e</Delayed>
                <Delayed delay={850}> </Delayed>
                <Delayed delay={900}>M</Delayed>
                <Delayed delay={950}>a</Delayed>
                <Delayed delay={1000}>i</Delayed>
                <Delayed delay={1050}>a</Delayed>
                <Delayed delay={1100}> </Delayed>
                <Delayed delay={1150}>M</Delayed>
                <Delayed delay={1200}>u</Delayed>
                <Delayed delay={1250}>t</Delayed>
                <Delayed delay={1300}>t</Delayed>
                <Delayed delay={1350}>s</Delayed>
              </span>
            </div>
          </div>
        </Suspense>
      </div>
      <div className="pt-32 w-full px-4 flex flex-row justify-between max-w-screen-xl">
        <div className="flex flex-col gap-2 items-center">
          <h1 id="h-txt" className="text-4xl mb-2">
            Onde Treinamos?
          </h1>
          <a
            href="https://www.google.com/maps/place/Complexo+Municipal+de+Cutamas/@41.1896885,-8.5960883,863m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd246417ceffc589:0x617ba4aae691a634!8m2!3d41.1896845!4d-8.593508!16s%2Fg%2F11c2mcprs8?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="w-full max-w-xs h-full rounded-xl overflow-hidden !aspect-square"
          >
            <Image
              as={NextImage}
              width={2684}
              height={1839}
              removeWrapper
              className="w-full h-full object-cover lg:max-h-[500px] max-h-[300px] object-top lg:scale-[1.30] lg:hover:scale-[1.75] scale-[2.2] hover:scale-[3] lg:-translate-y-20 translate-y-4"
              alt="Campo Municipal de Cutamas"
              src="/map.png"
            />
          </a>
          <div className="flex flex-row items-center justify-start gap-1">
            <Image
              width={24}
              height={24}
              src="/apple_pin.png"
              alt="apple pin"
              className="w-full h-full"
            />
            <h3 id="s-txt" className="sm:text-base text-sm">
              Rua Levadinha 4425-663 Pedrouços
            </h3>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="w-full h-96"></div>
      <div className="w-full h-96"></div>
      <div className="w-full h-96"></div>
      <div className="w-full h-96"></div>
    </div>
  );
}
