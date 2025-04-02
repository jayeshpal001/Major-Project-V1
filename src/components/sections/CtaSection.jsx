export default function CtaSection() {
    return (
      <section className="py-16 bg-blue-50 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Join our community of 10,000+ developers and get personalized guidance 
            from industry experts to fast-track your tech career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-medium">
              Start as a Mentee
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-medium">
              Become a Mentor
            </button>
          </div>
        </div>
      </section>
    );
  }