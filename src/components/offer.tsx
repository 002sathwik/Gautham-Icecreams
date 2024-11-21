import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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
            src: "/occ.jpg",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Other Events",
            designation: "Order Above 300",
            src: "/occ.jpg",
        },

    ];
    return (
        <div className="bg-gradient-to-b from-pink-700 via-green-300 to-amber-500">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="  heading  mb-4 text-white max-w-4xl font-grotesk">
                    "What We Offer for You"
                </h2>
                <p className="text-neutral-300 dark:text-neutral-300 text-sm md:text-base max-w-sm font-sora">
                At Gautham Icecream, we’re not just about serving delicious ice cream; we’re about creating memorable experiences for your celebrations.
                </p>
            </div>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
}
