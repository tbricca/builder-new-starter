export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
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
      </header>

      {/* Main Content - Empty for Builder Fusion */}
      <main className="relative z-10">
        {/* Content will be added via Builder Fusion */}
      </main>
    </div>
  );
}
