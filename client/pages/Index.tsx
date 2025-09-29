import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header Navigation */}
      <header className="relative z-20 flex items-center justify-between max-w-[1200px] mx-auto px-6 py-4 w-full">
        <div className="flex items-center">
          <a href="https://www.builder.io/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc5b47d20f6a943e485717e5895739988%2F8dd0de69bdfd4e9891f0c5f78ed52c30"
              alt="Builder.io"
              className="h-6 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center pointer-events-auto">
          <ul className="flex items-center h-full">
            <li className="flex items-center border-b-[3px] border-transparent hover:border-[rgb(172,126,244)] transition-colors duration-300">
              <Link to="/about" className="flex items-center px-4 py-3">
                <span className="text-white text-sm font-medium">About</span>
              </Link>
            </li>
            <li className="flex items-center border-b-[3px] border-transparent hover:border-[rgb(172,126,244)] transition-colors duration-300">
              <Link to="/dashboard" className="flex items-center px-4 py-3">
                <span className="text-white text-sm font-medium">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="flex items-center border-b-[3px] border-transparent hover:border-[rgb(172,126,244)] transition-colors duration-300">
              <Link to="/components" className="flex items-center px-4 py-3">
                <span className="text-white text-sm font-medium">
                  Components
                </span>
              </Link>
            </li>
            <li className="flex items-center border-b-[3px] border-transparent hover:border-[rgb(172,126,244)] transition-colors duration-300">
              <a
                href="https://www.builder.io/c/docs/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3"
              >
                <span className="text-white text-sm font-medium">Docs</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 pointer-events-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className={`w-6 h-6 text-white transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-2 pointer-events-auto">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:text-white hover:border-white/50 bg-black/20 backdrop-blur-lg px-4 py-2 text-sm font-medium"
            onClick={() =>
              window.open("https://www.builder.io/m/demo", "_blank")
            }
          >
            Contact sales
          </Button>
          <Button
            className="bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black backdrop-blur-lg px-4 py-2 text-sm font-medium min-w-[104px]"
            onClick={() => window.open("https://builder.io/signup", "_blank")}
          >
            Go to app
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Mobile Menu */}
          <div className="absolute top-full left-0 right-0 z-40 md:hidden bg-black/90 border-t border-white/10 backdrop-blur-lg pointer-events-auto animate-in slide-in-from-top-2 duration-200">
            <nav className="px-6 py-4">
              <div className="flex flex-col space-y-1">
                <Link
                  to="/about"
                  className="flex items-center justify-between py-3 text-white hover:text-[rgb(172,126,244)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-sm font-medium">About</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center justify-between py-3 text-white hover:text-[rgb(172,126,244)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-sm font-medium">Dashboard</span>
                </Link>
                <Link
                  to="/components"
                  className="flex items-center justify-between py-3 text-white hover:text-[rgb(172,126,244)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-sm font-medium">Components</span>
                </Link>
                <a
                  href="https://www.builder.io/c/docs/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 text-white hover:text-[rgb(172,126,244)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-sm font-medium">Docs</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open("https://www.builder.io/m/demo", "_blank");
                  }}
                  className="w-full px-4 py-2 border border-white/30 text-white hover:border-white/50 bg-black/20 backdrop-blur-lg rounded text-sm font-medium transition-colors"
                >
                  Contact sales
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open("https://builder.io/signup", "_blank");
                  }}
                  className="w-full px-4 py-2 bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black backdrop-blur-lg rounded text-sm font-medium transition-colors"
                >
                  Go to app
                </button>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <div className="flex flex-col items-center justify-start pt-[156px] px-6 text-center">
          {/* Badge */}
          <div className="flex items-center space-x-3 mb-[2px]">
            <span className="text-white/[0.78] text-sm font-medium tracking-[0.2em] uppercase">
              BUILDER.IO STARTER
            </span>
            <Badge className="bg-[rgb(172,126,244)]/20 text-[rgb(172,126,244)] border-[rgb(172,126,244)]/30 px-3 py-1 text-xs font-medium rounded-full">
              READY
            </Badge>
          </div>

          <h1 className="text-[3.125rem] font-bold leading-[75px] mb-6 text-white">
            Welcome to your starter template
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mb-12">
            This is a production-ready React application with TypeScript,
            Tailwind CSS, and all the tools you need to build modern web
            applications. Start building something amazing.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              asChild
              className="bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black px-8 py-3 text-base font-medium"
            >
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:text-white hover:border-white/50 bg-black/20 backdrop-blur-lg px-8 py-3 text-base font-medium"
            >
              <Link to="/components">Browse Components</Link>
            </Button>
          </div>

          {/* Feature Grid */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-[rgb(172,126,244)]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[rgb(172,126,244)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-white/70 text-sm">
                Built with Vite for instant hot reload and optimized builds
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[rgb(172,126,244)]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[rgb(172,126,244)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Type Safe</h3>
              <p className="text-white/70 text-sm">
                Full TypeScript support with strict type checking
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[rgb(172,126,244)]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[rgb(172,126,244)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Component Library</h3>
              <p className="text-white/70 text-sm">
                Pre-built UI components with Radix UI and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
