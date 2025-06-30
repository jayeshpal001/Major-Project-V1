import TestimonialCard from "../ui/TestimonialCard";
import { TESTIMONIALS } from "../../constants/data";

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Success Stories
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            testimonial={testimonial} 
          />
        ))}
      </div>
    </section>
  );
}