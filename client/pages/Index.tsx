import { useEffect, useState } from "react";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [showSlowWarning, setShowSlowWarning] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const slowTimer = setTimeout(() => {
      setShowSlowWarning(true);
    }, 5000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(slowTimer);
    };
  }, []);

  if (loading) {
    return (
      <div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        role="status"
        aria-live="polite"
        aria-label="Loading application"
      >
        <div className="flex flex-col items-center gap-8 px-6 max-w-md">
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc5b47d20f6a943e485717e5895739988%2F8dd0de69bdfd4e9891f0c5f78ed52c30"
              alt="Builder.io"
              className="h-8 w-auto animate-pulse"
              style={{ animationDuration: "2s" }}
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
            </div>

            <p className="text-white/80 text-sm font-light tracking-wide">
              Setting things up…
            </p>

            {showSlowWarning && (
              <p className="text-white/50 text-xs font-light mt-2 text-center animate-fade-in">
                This is taking longer than expected. Please check your
                connection.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
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
      </header>

      <main className="relative z-10">
        {/* Content will be added via Builder Fusion */}
      </main>
    </div>
  );
}
