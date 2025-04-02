import { useState, useEffect } from "react";
import MentorCard from "../ui/MentorCard";
import { MENTORS } from "../../constants/data";

export default function MentorsSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Mentors
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {isLoading ? (
          // Skeleton Loading
          Array(3).fill(0).map((_, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 animate-pulse"
            >
              <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4" />
              <div className="bg-gray-200 h-6 w-3/4 mx-auto mb-4" />
              <div className="bg-gray-200 h-4 w-1/2 mx-auto mb-4" />
              <div className="flex justify-center gap-2 mb-4">
                <div className="bg-gray-200 h-6 w-16 rounded-full" />
                <div className="bg-gray-200 h-6 w-16 rounded-full" />
              </div>
              <div className="bg-gray-200 h-10 w-full rounded-lg" />
            </div>
          ))
        ) : (
          MENTORS.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))
        )}
      </div>
    </section>
  );
}