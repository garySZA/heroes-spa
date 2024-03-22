import { createContext } from "react";
import { AuthState } from ".";

const defaultValue:AuthState = {
    logged: false,
    user: {
        id: '',
        name: ''
    },
    login: async () => {},
    logout: () => {} 
    
}

export const AuthContext = createContext(defaultValue);