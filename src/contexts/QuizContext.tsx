import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Option } from '@/types';
import questions from '@/lib/questions';
import languages from '@/lib/languages';

interface QuizContextType {
  currentQuestion: number;
  scores: { [key: string]: number };
  handleOption: (option: Option) => void;
  calculateResult: () => string;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);


export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({});

  const handleOption = (option: Option) => {
    const newScores = { ...scores };
    option.impacts.forEach(({ trait, value }) => {
      newScores[trait] = (newScores[trait] || 0) + value;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateResult = (): string => {
    // Step 1: Scale scores
    const maxAbsValue = Math.max(...Object.values(scores).map(Math.abs));
    const scaledScores = Object.fromEntries(
      Object.entries(scores).map(([trait, value]) => [trait, value / maxAbsValue])
    );

    // Step 2: Calculate cosine similarity for each language
    const similarities = languages.map(lang => {
      const dotProduct = lang.traits.reduce((sum, { trait, value }) => 
        sum + (scaledScores[trait] || 0) * value, 0);
      
      const magnitudeA = Math.sqrt(Object.values(scaledScores).reduce((sum, val) => sum + val * val, 0));
      const magnitudeB = Math.sqrt(lang.traits.reduce((sum, { value }) => sum + value * value, 0));
      
      const similarity = dotProduct / (magnitudeA * magnitudeB);
      return { name: lang.name, similarity };
    });

    // Step 3: Find and return the language with the highest similarity
    const bestMatch = similarities.reduce((best, current) => 
      current.similarity > best.similarity ? current : best
    );

    return bestMatch.name;
  };

  return (
    <QuizContext.Provider value={{ currentQuestion, scores, handleOption, calculateResult }}>
      {children}
    </QuizContext.Provider>
  );
};
