import React from "react";
import { resources } from "../constants/data";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        🚀 Explore Resources
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`https://source.unsplash.com/300x200/?technology,${section.category}`}
                alt={section.category}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <div>
                <h2 className="text-xl font-semibold text-blue-800">
                  {section.category}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {section.description}
                </p>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline hover:text-blue-800 text-sm"
                  >
                    🔗 {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
