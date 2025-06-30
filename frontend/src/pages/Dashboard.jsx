// src/pages/Dashboard.jsx
import { useState } from 'react';
import { initialQuestions } from '../constants/data';
import { 
  AcademicCapIcon,
  PencilSquareIcon,
  ArrowUpCircleIcon,
  ChatBubbleLeftIcon,
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [newQuestion, setNewQuestion] = useState('');
  const [answerInputs, setAnswerInputs] = useState({});

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const question = {
      id: Date.now(),
      text: newQuestion,
      author: "You",
      timestamp: "Just now",
      answers: []
    };

    setQuestions([question, ...questions]);
    setNewQuestion('');
  };

  const handleAnswerSubmit = (questionId, e) => {
    e.preventDefault();
    const answerText = answerInputs[questionId];
    if (!answerText?.trim()) return;

    const answer = {
      id: Date.now(),
      text: answerText,
      author: "You",
      timestamp: "Just now"
    };

    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { ...q, answers: [...q.answers, answer] } 
        : q
    ));

    setAnswerInputs({ ...answerInputs, [questionId]: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <AcademicCapIcon className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">Dev Community Q&A</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Question Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <form onSubmit={handleQuestionSubmit}>
            <div className="flex gap-4 items-start">
              <div className="bg-indigo-100 p-2 rounded-full">
                <PencilSquareIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Ask your question..."
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows="3"
                />
                <div className="mt-3 flex justify-end">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Post Question
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map(question => (
            <div key={question.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex gap-4 items-start">
                <UserCircleIcon className="w-8 h-8 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  {/* Question Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-semibold">{question.author}</span>
                      <span className="text-sm text-gray-500">{question.timestamp}</span>
                    </div>
                    <p className="text-gray-800">{question.text}</p>
                  </div>

                  {/* Answers Section */}
                  {question.answers.length > 0 && (
                    <div className="ml-2 pl-6 border-l-2 border-gray-100 space-y-4">
                      {question.answers.map(answer => (
                        <div key={answer.id} className="pt-4">
                          <div className="flex gap-3 items-start">
                            <UserCircleIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-sm">{answer.author}</span>
                                <span className="text-xs text-gray-500">{answer.timestamp}</span>
                              </div>
                              <p className="text-gray-700 text-sm">{answer.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Answer Form */}
                  <form 
                    onSubmit={(e) => handleAnswerSubmit(question.id, e)}
                    className="mt-6"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="bg-indigo-100 p-2 rounded-full">
                        <ArrowUpCircleIcon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <textarea
                          value={answerInputs[question.id] || ''}
                          onChange={(e) => setAnswerInputs({
                            ...answerInputs,
                            [question.id]: e.target.value
                          })}
                          placeholder="Write your answer..."
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm"
                          rows="2"
                        />
                        <div className="mt-2 flex justify-end">
                          <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md text-sm transition-colors"
                          >
                            Post Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;