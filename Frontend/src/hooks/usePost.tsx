import { useState } from 'react';

type UsePostResult<T> = {
  isLoading: boolean;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  post: (url: string, body: Record<string, unknown>) => Promise<T | null>;
};

export function usePost<T = any>(): UsePostResult<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const post = async (url: string, body: Record<string, unknown>): Promise<T | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const storedUser = localStorage.getItem('user');
      const user: { accessToken?: string } | null = storedUser ? JSON.parse(storedUser) : null;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: user?.accessToken ? `Bearer ${user.accessToken}` : '',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to make the request');
      }

      const data = await response.json();

      if (data?.accessToken) {
        localStorage.setItem('user', JSON.stringify({ ...user, accessToken: data.accessToken }));
      }

      return data;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, setError, post };
}
