import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { Action, AuthProviderProps, State, User } from "../../types";
import { types } from "..";

export interface AuthState extends State {
    login: ( name: string ) => Promise<void>;
    logout: () => void
}

const init = (): State => {
    const userJSON = localStorage.getItem('user');
    const user: User | null = userJSON ? JSON.parse( userJSON ) : null;

    return {
        logged: user !== null,
        user: user || { id: '', name: '' },
    }
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [ authState, dispatch ] = useReducer( authReducer, {}, init )
    
    const login = async ( name: string ) => {
        const user = { id: 'ABC', name }
        
        const action:Action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch( action );
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action: Action = {
            type: types.logout,
            payload: {
                id: 'null',
                name: 'null'
            }
        }
        
        dispatch( action )
    }

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}
