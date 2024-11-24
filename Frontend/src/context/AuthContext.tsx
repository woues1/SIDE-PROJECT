import { createContext, useEffect, useReducer, useState } from "react";

import {
    AuthState,
    AuthAction,
    AuthContextValue,
    AuthContextProviderProps,
    User,
} from '../../AuthTypes';

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload }
        case 'LOGOUT':
            return {...state, user: null }
        default:
            return state
    }
}


export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, { user: null, loading: true })
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const validateToken = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                const user: User | null = storedUser ? JSON.parse(storedUser) : null;

                console.log('Validating token...');
                const response = await fetch('/api/admin/token/validate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: user?.accessToken ? `Bearer ${user.accessToken}` : '',
                    },
                    credentials: 'include', // Send cookies for refresh token check
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.newAccessToken) {
                        console.log('New access token received and stored.');
                        localStorage.setItem('user', JSON.stringify({ accessToken: data.newAccessToken }));
                        const updatedUser = { accessToken: data.newAccessToken };
                        dispatch({ type: 'LOGIN', payload: updatedUser });
                    } else {
                        console.log('Access token is valid.');
                        dispatch({ type: 'LOGIN', payload: user });
                    }
                } else {
                    console.log('Token validation failed. Logging out.');
                    dispatch({ type: 'LOGOUT' });
                }
            } catch (error) {
                console.error('Error validating token:', error);
                dispatch({ type: 'LOGOUT' });
            } finally {
                setLoading(false);
            }
        };

        validateToken();
    }, []);


    return (
        <AuthContext.Provider value={{ ...state, dispatch, loading }}>
            {children}
        </AuthContext.Provider>
    )
}