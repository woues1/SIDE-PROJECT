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
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

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
    
        const refreshToken = document.cookie
            .split('; ')
            .find((cookie) => cookie.startsWith('refreshToken='))
            ?.split('=')[1];
    
        const validateAccessToken = async () => {
            if (user?.token) {
                try {
                    const response = await fetch('/api/token/validate', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${user.token}`,
                        },
                    });
                    if (response.ok) {
                        console.log('Access token is valid.');
                        return;
                    } else {
                        console.log('Access token is invalid.');
                    }
                } catch (error) {
                    console.error('Error validating access token:', error);
                }
            }
    
            if (refreshToken) {
                console.log('Requesting a new access token...');
                try {
                    const response = await fetch('/api/token/refresh', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ refreshToken }),
                    });
    
                    if (response.ok) {
                        const data = await response.json();
                        localStorage.setItem('user', JSON.stringify({ token: data.accessToken }));
                        console.log('New access token received and stored.');
                    } else {
                        console.log('Failed to refresh token. Logging out.');
                    }
                } catch (error) {
                    console.error('Error refreshing token:', error);
                }
            } else {
                console.log('User is not logged in.');
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