import React, { useState } from 'react';
import { User } from '../../AuthTypes';

const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

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
      const storedUser = localStorage.getItem('user');
      const user: User | null = storedUser ? JSON.parse(storedUser) : null;

      // Make the API call to create a project using fetch
      const response = await fetch('/api/admin/create/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: user?.accessToken ? `Bearer ${user.accessToken}` : '',
        },
        body: JSON.stringify({ name, description, link }),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const data = await response.json();

      // Set the success message
      setMessage(data.message);

      // Optionally, reset the form fields after successful creation
      setName('');
      setDescription('');
      setLink('');
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
          className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;

