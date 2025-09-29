import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-lg sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc5b47d20f6a943e485717e5895739988%2F8dd0de69bdfd4e9891f0c5f78ed52c30"
              alt="Builder.io"
              className="h-6 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white/70 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link to="/about" className="text-[rgb(172,126,244)] font-medium">
              About
            </Link>
            <Link
              to="/dashboard"
              className="text-white/70 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/components"
              className="text-white/70 hover:text-white transition-colors"
            >
              Components
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Badge className="bg-[rgb(172,126,244)]/20 text-[rgb(172,126,244)] border-[rgb(172,126,244)]/30 px-3 py-1 text-xs font-medium rounded-full mb-4">
            ABOUT
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Built for modern development
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            This starter template provides everything you need to build
            production-ready applications with the latest tools and best
            practices.
          </p>
        </div>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-[rgb(172,126,244)]">
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• React 18 with TypeScript</li>
                  <li>• React Router 6 (SPA mode)</li>
                  <li>• Vite for lightning-fast builds</li>
                  <li>• TailwindCSS for styling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-[rgb(172,126,244)]">
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Express server integrated</li>
                  <li>• API routes with TypeScript</li>
                  <li>• Shared types across client/server</li>
                  <li>• Hot reload for both ends</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-[rgb(172,126,244)]">
                  UI Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Radix UI primitives</li>
                  <li>• Pre-built component library</li>
                  <li>• Accessible by default</li>
                  <li>• Customizable with Tailwind</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[rgb(172,126,244)]">
                Development Experience
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[rgb(172,126,244)] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Hot reload for instant feedback
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[rgb(172,126,244)] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  TypeScript for type safety
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[rgb(172,126,244)] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Vitest for testing
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[rgb(172,126,244)] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  ESLint and Prettier configured
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-[rgb(172,126,244)]">
                Production Ready
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[rgb(172,126,244)] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Optimized build process
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[rgb(172,126,244)] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Environment configuration
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[rgb(172,126,244)] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Docker and deployment ready
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[rgb(172,126,244)] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  API integration examples
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start building?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Explore the components library and dashboard to see examples of what
            you can build with this starter template.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black"
            >
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:text-white hover:border-white/50 bg-black/20"
            >
              <Link to="/components">Browse Components</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
