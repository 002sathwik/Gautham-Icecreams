export default function HeroSection() {
    return (
      <div className="relative h-screen w-full">
        
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/vid.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
  
        
        <div className="absolute bottom-20 w-full text-center">
          <h1 className="text-white text-4xl md:text-6xl font-grotesk font-bold bg-black bg-opacity-60 inline-block px-4 py-2 rounded-lg">
          "Scoops of Happiness, Gautham IceCreams"
          </h1>
        </div>
      </div>
    );
  }
  