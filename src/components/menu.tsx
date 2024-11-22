import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
 

export function TimelineDemo() {
  const data = [
    {
      title: "Kesar delight",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          A rich and aromatic saffron-infused treat that brings royal indulgence to every scoop.

          </p>
          <div className="w-full h-full ">
            <Image
              src="/kd.avif"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-full w-full "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Alphonso Mango ",
      content: (
        <div>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          The king of mangoes, blended to perfection for a creamy, tropical experience.
          </p>
          <div className="w-full h-full ">
            <Image
              src="/mango.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-full w-full "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Pineapple  ",
      content: (
        <div>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          A refreshing burst of tangy pineapple that transports you to a tropical paradise with every bite.
          </p>
          <div className="w-full h-full ">
            <Image
              src="/pine.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-full w-full "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Strawberry ",
      content: (
        <div>
        
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Sweet, juicy strawberries blended into a creamy ice cream for a classic, fruity delight.
          </p>
          <div className="w-full h-full ">
            <Image
              src="/s.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-full w-full "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Belgian Chocolate  ",
      content: (
        <div>
         
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          A decadently smooth and velvety chocolate experience, crafted with premium Belgian cocoa.
          </p>
          <div className="w-full h-full ">
            <Image
              src="/coc.avif"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-full w-full "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Vanilla  ",
      content: (
        <div>
        
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          A timeless, smooth, and creamy vanilla ice cream made with real vanilla beans for an authentic flavor.
          </p>
          <div className="w-full h-full ">
            <Image
              src="/vina.avif"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-full w-full "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Butterscotch  ",
      content: (
        <div>
       
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          A sweet and buttery treat with a hint of caramelized sugar, offering a rich, indulgent flavor.
          </p>
          <div className="w-full h-full ">
            <Image
              src="/butter.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-full w-full "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Pista",
      content: (
        <div>
        
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          A creamy pistachio ice cream with a nutty flavor, bringing the perfect balance of sweetness and crunch.
          </p>
          <div className="w-full h-full ">
            <Image
              src="/pista.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-full w-full "
            />
          </div>
        </div>
      ),
    },
   
  ]; 
  return (
    <section id="menu">
    <div className=" relative -mt-28 z-20 w-full " >
      <Timeline data={data} />
    </div>
    </section>
  );
}
