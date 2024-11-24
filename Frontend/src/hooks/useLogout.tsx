import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    
    const logout = async () => {
        localStorage.removeItem('user')

        const response = await fetch('/api/logout', {
                method: 'POST', 
                credentials: 'include',
        })
        
        if (response.ok) {
            dispatch({ type: 'LOGOUT' })
            window.location.reload();
        } else {
            console.log('Error occured while logging out')
        }

    }
    return { logout }

}