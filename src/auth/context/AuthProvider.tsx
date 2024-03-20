import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { Action, AuthProviderProps, State } from "../../types";
import { types } from "..";

const initialState: State = {
    logged: false,
    user: {
        id: '',
        name: ''
    },
    login: () => {}
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [ authState, dispatch ] = useReducer( authReducer, initialState )
    
    const login = async ( name: string ) => {
        const action:Action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name
            }
        }

        dispatch( action );
    }

    return (
        <AuthContext.Provider value={{ ...authState, login }}>
            { children }
        </AuthContext.Provider>
    )
}
