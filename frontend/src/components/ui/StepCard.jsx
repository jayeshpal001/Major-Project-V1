export default function StepCard({ icon, title, text }) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    );
  }