import { FiArrowRight } from "react-icons/fi";
import { FOUNDATIONS, SPECIALIZATIONS } from "../../constants/data";

export default function RoadmapSection() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Development Career Roadmap
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Semesters 1-4: Foundations
            </h3>
            <ul className="space-y-3">
              {FOUNDATIONS.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2 group"
                >
                  <FiArrowRight className="text-blue-600 transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Semesters 5-8: Specialization
            </h3>
            <ul className="space-y-3">
              {SPECIALIZATIONS.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2 group"
                >
                  <FiArrowRight className="text-blue-600 transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}