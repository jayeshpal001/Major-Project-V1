import { FiMail } from "react-icons/fi";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-200 px-6 md:px-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <FiMail className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Get Career Insights
          </h3>
          <p className="text-gray-600">
            Subscribe to our weekly newsletter for expert tips and resources
          </p>
        </div>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}