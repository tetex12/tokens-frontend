import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black">
      <nav className="bg-gray-900 border-b border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back!
          </h2>
          <p className="text-gray-400">
            This is your dashboard placeholder. User-specific content will appear here after authentication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-red-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-red-400 mb-3">Profile</h3>
            <p className="text-gray-400">
              View and manage your profile information.
            </p>
          </div>

          <div className="bg-gray-900 border border-purple-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">Settings</h3>
            <p className="text-gray-400">
              Configure your account settings and preferences.
            </p>
          </div>

          <div className="bg-gray-900 border border-gold-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gold-400 mb-3">Activity</h3>
            <p className="text-gray-400">
              Track your recent activity and notifications.
            </p>
          </div>

          <div className="bg-gray-900 border border-red-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-red-400 mb-3">Tokens</h3>
            <p className="text-gray-400">
              Manage your authentication tokens and sessions.
            </p>
          </div>

          <div className="bg-gray-900 border border-purple-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">API Access</h3>
            <p className="text-gray-400">
              Access API documentation and credentials.
            </p>
          </div>

          <div className="bg-gray-900 border border-gold-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gold-400 mb-3">Support</h3>
            <p className="text-gray-400">
              Get help and contact customer support.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 border border-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Quick Stats</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">0</div>
              <div className="text-gray-400">Active Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-gray-400">API Calls</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">0</div>
              <div className="text-gray-400">Notifications</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
