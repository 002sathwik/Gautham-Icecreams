import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";


export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Every Cone Handed Over with a Smile",
      description:
        "friendly face greeting you as your ice cream cone is served with a genuine smile. It’s not just about the treat;😊🍦 ",
      skeleton: <SkeletonOne />,
      className:
        " m-2 col-span-1 lg:col-span-4 border rounded-2xl  border-black  bg-gradient-to-b from-yellow-400 via-green-500 to-pink-400 ",
    },
    {
      title: "Hygienic and Advanced Softy Machines",
      description:
        "With cutting-edge automation, they minimize human handling, preserving the freshness and purity of every batch.🌟🍦",
      skeleton: <SkeletonTwo />,
      className: " m-2 border border-black  rounded-2xl col-span-1 lg:col-span-2 bg-gradient-to-b from-pink-400 via-green-500 to-yellow-400", 
    },

  ];
  return (
    <div className="relative z-20 py-6 lg:py-40 max-w-screen mx-auto bg-gradient-to-br   from-pink-700 via-amber-500 to-green-300">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto  text-left md:text-center tracking-tight font-medium text-white font-grotesk dark:text-white">
         " Each Cone Server With Love "
        </h4>

        <p className="text-sm  font-sora text-gray-300 lg:text-base  max-w-2xl  my-4 mx-auto  text-lefty md:text-center font-normal dark:text-neutral-300">
        This phrase beautifully encapsulates a heartfelt commitment to quality and care. It conveys the idea that every cone of ice cream isn't just a product but a delightful experience crafted with passion,
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12  gap-2 ">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl  font-grotesk mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto font-sora",
        "text-white  text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-1 gap-10 h-full ">
      <div className="w-full   mx-auto  dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/boy.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top  rounded-t-2xl"
          />
        </div>
      </div>

    </div>
  );
};




import { useState, useEffect } from "react";

export const SkeletonTwo = () => {
  const videos = [
    "/v1.mp4", 
    "/v2.mp4", 
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById("loopVideo") as HTMLVideoElement;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [videos.length]);

  return (
    <div className=" relative flex items-center justify-center h-full w-full ">
      <video
        id="loopVideo"
        src={videos[currentVideoIndex]}
        className="h-full w-auto object-cover rounded-t-full"
        autoPlay
        muted
        loop={false} 
      />
    </div>
  );
};
