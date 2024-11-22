import { useState } from "react";
import { AiOutlineSound, AiFillSound } from "react-icons/ai"; // Ant Design sound icons

export default function HeroSection() {
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      <video
        autoPlay
        loop
        muted={!muted}
        className="absolute top-0 left-0 w-full h-full object-cover z-10 -mt-14 "
      >
        <source src="/v3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      <button
        onClick={toggleMute}
        className=" z-30 absolute  top-4 right-4 p-2 rounded-full bg-white bg-opacity-50"
      >
        {muted ? (
          <AiOutlineSound size={24} />
        ) : (
          <AiFillSound size={24} />
        )}
      </button>

      <div className="z-20 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/100 to-transparent bg-opacity-40"></div>
      <div className="z-30 absolute bottom-48 md:bottom-40 w-full text-left  md:text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold font-grotesk bg-opacity-60 inline-block px-4 py-2 rounded-lg ">
          Experience Magic of Gautham Icecream
        </h1>
        <p className="mt-2 caption max-w-2xl mx-auto font-sora p-1 md:p-0">
          Your Favorite Icecream, Made with Love, A Symphony of Flavors in Every Scoop 🍦🧁
        </p>
      </div>
    </div>
  );
}

