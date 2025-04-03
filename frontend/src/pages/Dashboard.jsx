// src/pages/Dashboard.jsx
import { useState } from 'react';
import { questionsData } from '../constants/data';
import { QuestionForm } from '../components/sections/QuestionForm';
// import QuestionForm from '../components/QuestionForm';
import { UserCircleIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { AnswerForm } from '../components/sections/AnswerForm';
const Dashboard = () => {
  const [questions, setQuestions] = useState(questionsData);

  const handleNewQuestion = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
  };

  const handleNewAnswer = (questionId, newAnswer) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { ...q, answers: [...q.answers, newAnswer] }
        : q
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <ChatBubbleLeftIcon className="w-8 h-8 text-blue-600" />
            Community Q&A Board
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <QuestionForm onQuestionSubmit={handleNewQuestion} />
        
        <div className="space-y-6">
          {questions.map(question => (
            <div key={question.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start gap-4">
                <UserCircleIcon className="w-8 h-8 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold">{question.author}</span>
                      <span className="text-sm text-gray-500">{question.timestamp}</span>
                    </div>
                    <p className="text-gray-800">{question.question}</p>
                  </div>

                  {/* Answers */}
                  {question.answers.map(answer => (
                    <div key={answer.id} className="ml-6 pl-6 border-l-2 border-gray-200">
                      <div className="flex items-start gap-4 mb-4">
                        <UserCircleIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-medium text-sm">{answer.author}</span>
                            <span className="text-xs text-gray-500">{answer.timestamp}</span>
                          </div>
                          <p className="text-gray-700 text-sm">{answer.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Answer Form */}
                  <AnswerForm onAnswerSubmit={(answer) => handleNewAnswer(question.id, answer)} />
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