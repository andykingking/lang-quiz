import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Discover Your Ideal Programming Language</h1>
        <p className="text-xl text-white mb-8">Take our quiz and find out which programming language suits you best!</p>
        <Link href="/quiz">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
            Start Quiz
          </Button>
        </Link>
      </div>
    </div>
  )
}