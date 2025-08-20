export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f0f4ff] to-[#dbeafe] dark:from-[#0f172a] dark:to-[#1e293b] px-6">
      <section className="max-w-3xl text-center space-y-6">
        {/* Awareness Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Stand Against Bullying
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Create a safer, kinder world.
        </p>
      </section>
    </main>
  );
}
