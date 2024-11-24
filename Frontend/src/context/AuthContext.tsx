import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext<{ user: any; dispatch: React.Dispatch<any> } | undefined>(undefined);

export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}


export const AuthContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, { user: null })

    useEffect(() => {

        const validateToken = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                const user = storedUser ? JSON.parse(storedUser) : null;

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
                        dispatch({ type: 'LOGIN', payload: { accessToken: data.newAccessToken } });
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
            }
        };

        validateToken();
    }, []);


    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}