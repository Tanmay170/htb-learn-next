import { useRouter } from 'next/router';

export default function Destination() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-gray-800 p-4">
      <h1 className="text-3xl font-bold mb-4">
        Explore {name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Destination'}
      </h1>
      <p className="text-lg mb-6">
        Discover the wonders of {name ? name.charAt(0).toUpperCase() + name.slice(1) : 'this place'}!
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => router.push('/')}
      >
        Back to Home
      </button>
    </div>
  );
}
