import Image from "next/image";
import { Sora, Space_Grotesk } from 'next/font/google';
import Head from "next/head";
import Navbar from "@/components/nav";
import HeroSection from "@/components/hero";
import { TimelineDemo } from "@/components/menu";
import { AnimatedTestimonialsDemo } from "@/components/offer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FeaturesSectionDemo } from "@/components/galry";



const grotesk =Space_Grotesk({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-grotesk',
})

const sora= Sora({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-sora',
})

export default function Home() {
  return (
    <div
      className={`${sora.variable} ${grotesk.variable} `}
    >
 <>
      <Head>
        <title>Gautham IceCreams</title>
        <meta name='description' content='Enjoy Before It Melts' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <HeroSection/>
      <TimelineDemo/>
      <BackgroundBeamsWithCollision>
      <AnimatedTestimonialsDemo/>
      <FeaturesSectionDemo />
      </BackgroundBeamsWithCollision>

    </>
    </div>
  );
}
