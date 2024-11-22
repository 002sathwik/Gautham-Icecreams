import Image from "next/image";


export default function ContactSticky() {
  return (
    <div>
      <div
        className="fixed bottom-4 right-4 z-50 bg-green-300 text-white  rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 cursor-pointer"
        title="Call us"
      >
        <a href="tel:+919916690889" className="flex items-center justify-center">
          <Image
          src={"/phone.png"}
          alt="phone"
            height={42}
            width={42}
        
           className="h-full w-full object-cover "
          />
        </a>
      </div>
    </div>
  );
}