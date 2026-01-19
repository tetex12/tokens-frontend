import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-gold-400 to-red-500 text-transparent bg-clip-text">
          Welcome to Tokens Frontend
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          A modern Next.js application with authentication and API integration.
          Built with the App Router, TailwindCSS, and TypeScript.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/login"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg font-semibold transition-colors"
          >
            Register
          </Link>
          <Link
            href="/dashboard"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
