import CreateProject from "../components/CreateProject";

function Dashboard() {
    return (
        <div className="py-24 min-h-screen bg-gray-900 p-6">
            <header className="bg-gray-300 shadow py-4 px-6 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            </header>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-gray-300 rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700">Total Visitors</h2>
                        <p className="mt-2 text-3xl font-bold text-gray-800">1,234</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-300 rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700">Page Views</h2>
                        <p className="mt-2 text-3xl font-bold text-gray-800">5,678</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-300 rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700">Signups</h2>
                        <p className="mt-2 text-3xl font-bold text-gray-800">123</p>
                    </div>
                </div>
                <div className="mt-8 bg-gray-300 rounded-lg shadow p-6 mb-10">
                    <h2 className="text-lg font-semibold text-gray-700">Recent Activity</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="flex justify-between">
                            <span className="text-gray-600">User1 signed up</span>
                            <span className="text-gray-500 text-sm">2 hours ago</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-600">User2 visited "About" page</span>
                            <span className="text-gray-500 text-sm">5 hours ago</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-600">User3 submitted a contact form</span>
                            <span className="text-gray-500 text-sm">1 day ago</span>
                        </li>
                    </ul>
                </div>
                <CreateProject />
            </div>
        </div>
    );
}

export default Dashboard;

