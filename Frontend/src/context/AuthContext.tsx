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

        const user = (() => {
            try {
                const storedUser = localStorage.getItem('user');
                return storedUser ? JSON.parse(storedUser) : null;
            } catch (error) {
                console.error('Error parsing user from localStorage:', error);
                return null;
            }
        })();
        
        const validateAccessToken = async () => {
            if (user?.accessToken) {
                console.log('Validating token:', user?.accessToken);
                try {
                    const response = await fetch('/api/token/validate', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    });
                    if (response.ok) {
                        console.log('Access token is valid.');
                        dispatch({ type: 'LOGIN', payload: user });
                        return;
                    } else {
                        console.log('Access token is invalid.');
                    }
                } catch (error) {
                    console.error('Error validating access token:', error);
                }
            }

            console.log('Requesting a new access token...');
            try {
                const response = await fetch('/api/token/validate/refresh', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('user', JSON.stringify({ Authorization: data.accessToken }));
                    console.log('New access token received and stored.');
                } else {
                    console.log('Failed to refresh token. Logging out.');
                    dispatch({ type: 'LOGOUT' });
                }
            } catch (error) {
                console.error('Error refreshing token:', error);
            }

        };

        validateAccessToken();
    }, []);


    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}