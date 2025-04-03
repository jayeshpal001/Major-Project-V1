// src/components/AnswerForm.jsx
import { useState } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

export const AnswerForm = ({ onAnswerSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim()) {
      onAnswerSubmit({
        id: Date.now(),
        text: answer,
        author: "Anonymous Mentor",
        timestamp: new Date().toLocaleString()
      });
      setAnswer('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 ml-10">
      <div className="flex items-start gap-4">
        <div className="bg-purple-100 p-2 rounded-full">
          <ArrowUpCircleIcon className="w-6 h-6 text-purple-600" />
        </div>
        <div className="flex-1">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows="2"
          />
          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Post Answer
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};