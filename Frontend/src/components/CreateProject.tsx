import React, { useState } from 'react';
import { usePost } from '../hooks/usePost';

const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [message, setMessage] = useState('');
  const { isLoading, error, setError, post } = usePost();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous error or success message
    setError('');
    setMessage('');

    // Validate input fields
    if (!name || !description || !link) {
      setError('All fields are required!');
      return;
    }

    try {
      // Use the post method from the usePost hook

      const data = await post('/api/admin/create/project', {
        name,
        description,
        link,
      });
      
      if (data) {
        // Set the success message
        setMessage(data.message);

        // Optionally, reset the form fields after successful creation
        setName('');
        setDescription('');
        setLink('');
      }
    } catch (err: any) {
      // Set error message if request fails
      setError(err.message || 'Failed to create project');
    }
  };


  return (
    <div className="max-w-md p-6 border border-gray-300 rounded-lg shadow-md bg-gray-300">
      <h1 className="text-2xl font-semibold text-center mb-6">Create a New Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Project Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block text-sm font-medium text-gray-700">Project Link</label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-500 text-sm">{message}</p>}
        
        <button
                    type="submit"
                    className={`w-full py-2 mt-4 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        }`}
                    disabled={isLoading} // Disable button when loading
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                            </svg>
                            Loading...
                        </div>
                    ) : (
                        'Create project'
                    )}
                </button>
      </form>
    </div>
  );
};

export default CreateProject;

