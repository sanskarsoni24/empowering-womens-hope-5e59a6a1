
import React from "react";
import { Quote } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The support I received from Cancer Care for Her was invaluable during my treatment journey. They made me feel less alone.",
    name: "Priya Sharma",
    role: "Breast Cancer Survivor"
  },
  {
    quote: "Their resources helped me understand my treatment options and gave me the confidence to make informed decisions about my care.",
    name: "Meera Patel",
    role: "Patient"
  },
  {
    quote: "The online support groups connected me with others who truly understood what I was going through. I've made lifelong friends.",
    name: "Anita Singh",
    role: "3-year Survivor"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-light/50 to-purple-light/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-dark">
          Voices of Strength
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1 pl-4">
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <Quote size={48} className="text-pink mb-4" />
                      <p className="text-lg md:text-xl mb-6 text-gray-700 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold text-purple-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mr-2 translate-y-0" />
              <CarouselNext className="static ml-2 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
