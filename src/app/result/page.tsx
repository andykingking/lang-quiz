'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProgrammingLanguage } from '@/types';
import languages from '@/lib/languages';
import { Suspense } from 'react';


function ResultContent() {
  const searchParams = useSearchParams();
  const languageName = searchParams.get('language');
  const language: ProgrammingLanguage = languages.find(lang => lang.name === languageName) as ProgrammingLanguage;

  return (
    <Card className="w-[640px]">
    <CardHeader>
      <CardTitle>Your Ideal Programming Language</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold mb-4">{language.name}</p>
      <p className="mb-4">
        Based on your answers, we think {language.name} would be a great programming language for you to learn!
      </p>
      <p className="mb-4">
        {language.insights[Math.floor(Math.random() * language.insights.length)]}
      </p>
      <Link href="/">
        <Button className="w-full">Take the Quiz Again</Button>
      </Link>
    </CardContent>
  </Card>
  )
}


export default function Result() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <Suspense fallback={<div>Loading...</div>}>
        <ResultContent />
      </Suspense>
    </div>
  );
}