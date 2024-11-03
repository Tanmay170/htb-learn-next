import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Wanderlust Travel</h1>
        <p className="text-lg">Discover the most beautiful places around the world.</p>
      </header>

      <main className="w-full max-w-lg text-center">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Featured Destinations</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/destination?name=paris" className="text-blue-500 hover:text-blue-700 text-lg">
                Paris
              </Link>
            </li>
            <li>
              <Link href="/destination?name=bali" className="text-blue-500 hover:text-blue-700 text-lg">
                Bali
              </Link>
            </li>
            <li>
              <Link href="/destination?name=kyoto" className="text-blue-500 hover:text-blue-700 text-lg">
                Kyoto
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
