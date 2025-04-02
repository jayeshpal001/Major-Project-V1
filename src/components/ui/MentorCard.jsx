export default function MentorCard({ mentor }) {
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-transparent hover:border-blue-500">
        <img
          src={mentor.img}
          alt={`${mentor.name}, ${mentor.role}`}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          loading="lazy"
        />
        <h3 className="text-xl font-semibold text-center text-gray-800">
          {mentor.name}
        </h3>
        <p className="text-gray-500 text-center mb-4">{mentor.role}</p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {mentor.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
        <button className="w-full py-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-blue-600 transition-colors font-medium">
          View Profile
        </button>
      </div>
    );
  }