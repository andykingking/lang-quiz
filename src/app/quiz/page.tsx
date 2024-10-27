'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import questions from '@/lib/questions';
import { QuizProvider, useQuizContext } from '@/contexts/QuizContext';
import { Option } from '@/types';


function QuizContent() {
  const { currentQuestion, handleOption, calculateResult } = useQuizContext();
  const router = useRouter();
  const question = questions[currentQuestion];

  const handleOptionAndNavigate = (option: Option) => {
    handleOption(option);
    if (currentQuestion === questions.length - 1) {
      const result = calculateResult();
      router.push(`/result?language=${result}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <Card className="w-[640px]">
        <CardHeader>
          <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">{question.text}</p>
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleOptionAndNavigate(option)}
                className="w-full text-left justify-start"
                variant="outline"
              >
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Quiz() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}
