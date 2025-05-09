import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import BoxReveal from "./ui/box-reveal";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Marriage Functions",
            designation: "Order Above 300",
            src: "/occ.jpg",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Party Functions",
            designation: "Order Above 300",
            src: "/party.jpg",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Other Events",
            designation: "Order Above 300",
            src: "/p1.jpg",
        },

    ];
    return (
        <section id="orders">
        <div className="bg-gradient-to-b from-pink-700 via-green-500 to-amber-500">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
            <BoxReveal boxColor={"#EBF400"} duration={0.5}>
                <h2 className="  heading  mb-4 text-white max-w-4xl font-grotesk">
                    "What We Offer for You"
                </h2>
                </BoxReveal>
                <p className="  text-gray-200 text-sm md:text-base max-w-sm font-sora">
                At Gautham Icecream, we’re not just about serving delicious ice cream; we’re about creating memorable experiences for your celebrations.
                </p>
            </div>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
        </section>
    );
}
