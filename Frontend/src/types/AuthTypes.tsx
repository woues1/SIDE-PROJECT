import React from 'react';

export interface User {
    accessToken: string;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
}

export interface AuthContextValue extends AuthState {
    dispatch: React.Dispatch<AuthAction>;
}

export type AuthAction =
    | { type: 'LOGIN'; payload: User | null }
    | { type: 'LOGOUT' };

export interface AuthContextProviderProps {
    children: React.ReactNode;
}
