// src/components/QuestionForm.jsx
import { useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export const QuestionForm = ({ onQuestionSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onQuestionSubmit({
        id: Date.now(),
        question,
        author: "Anonymous User",
        timestamp: new Date().toLocaleString(),
        answers: []
      });
      setQuestion('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <PencilSquareIcon className="w-6 h-6 text-blue-600" />
        </div>
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask your question..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Post Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};