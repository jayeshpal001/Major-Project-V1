import { FiUsers, FiMessageSquare, FiMap } from "react-icons/fi";
import StepCard from "../ui/StepCard";
import { STEPS } from "../../constants/data";

export default function HowItWorks() {
  const getIconComponent = (iconName) => {
    switch(iconName) {
      case 'FiUsers': return <FiUsers size={40} />;
      case 'FiMessageSquare': return <FiMessageSquare size={40} />;
      case 'FiMap': return <FiMap size={40} />;
      default: return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {STEPS.map((step, index) => (
          <StepCard 
            key={index}
            icon={getIconComponent(step.icon)}
            title={step.title}
            text={step.text}
          />
        ))}
      </div>
    </section>
  );
}