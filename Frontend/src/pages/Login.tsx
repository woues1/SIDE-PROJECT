import { useEffect, useReducer } from "react"
import { useLogin } from "../hooks/useLogin";


interface State {
    email: string;
    password: string;
    error: string;
}

type Action =
    | { field: string; type: "SET_FIELD"; payload: string }
    | { type: "SET_ERROR"; payload: string }
    | { type: "RESET_ERROR" }

const initialState: State = {
    email: '',
    password: '',
    error: '',
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'RESET_ERROR':
            return { ...state, error: '' };
        default:
            return state;
    }
}


function Login() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { Login, error, isLoading } = useLogin()
    const handleInputChange = (field: keyof State, value: string) => {
        dispatch({
            type: 'SET_FIELD',
            field,
            payload: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "RESET_ERROR" });
        await Login(state.email, state.password)

    }

    useEffect(() => {
        if (error) {
            dispatch({ type: "SET_ERROR", payload: error });
        }
    }, [error]);


    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-white">
            <label htmlFor="email">Email</label>
            <input
                id="email"
                className="bg-white text-black"
                type="email"
                onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                className="bg-white text-black"
                type="password"
                onChange={(e) => handleInputChange("password", e.target.value)}
            />
            <button disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"}
            </button>
            {state.error && <p className="text-red-500">{state.error}</p>}
        </form>

    )
}

export default Login
