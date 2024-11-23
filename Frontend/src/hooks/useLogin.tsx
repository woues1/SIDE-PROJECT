import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { dispatch } = useAuthContext()

    const Login = async (email: string, password: string) => {
        setIsLoading(true);
        setError('')

        const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            //only set item if server sends back jwt toke in json form
            //if server responds with cookies only remove localStorage.setItem('Authorization', JSON.stringify(json));
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }
    return { Login, isLoading, error }
}