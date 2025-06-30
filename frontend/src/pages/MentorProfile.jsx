import { useParams } from 'react-router-dom';
import { MENTORS, TESTIMONIALS, GUIDANCE_DATA } from '../constants/data';

export default function MentorProfile() {
  const { mentorName } = useParams();
  const mentor = MENTORS.find(m => m.name === mentorName);
  const mentorTestimonials = TESTIMONIALS.filter(t => t.author === mentorName);

  if (!mentor) return <div className="text-center py-8">Mentor not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <img
          src={mentor.img}
          alt={mentor.name}
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-100"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{mentor.name}</h1>
          <p className="text-2xl text-blue-600 mb-4">{mentor.role}</p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center">
              <span className="text-gray-500">🏢</span>
              <span className="ml-1 text-gray-600">{mentor.company}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500">📍</span>
              <span className="ml-1 text-gray-600">{mentor.location}</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-gray-600">{mentor.rating} Rating</span>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Connect Now
          </button>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2>
        <p className="text-gray-600 leading-relaxed">{mentor.bio}</p>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {mentor.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {mentorTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mentorship Program Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mentorship Program</h2>
        <div className="space-y-6">
          {GUIDANCE_DATA.map((guidance) => (
            <div key={guidance.id} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{guidance.title}</h3>
              <p className="text-gray-600 mb-4">{guidance.summary}</p>
              <ul className="list-disc list-inside space-y-2">
                {guidance.detailed_data.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}