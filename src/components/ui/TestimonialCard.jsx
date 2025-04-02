export default function TestimonialCard({ testimonial }) {
    return (
      <div className="bg-white p-8 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all duration-300">
        <blockquote>
          <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
          <footer className="not-italic">
            <div className="font-semibold text-gray-800">{testimonial.author}</div>
            <div className="text-gray-500 text-sm">{testimonial.role}</div>
          </footer>
        </blockquote>
      </div>
    );
  }