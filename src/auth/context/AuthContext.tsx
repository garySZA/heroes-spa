import { createContext } from "react";
import { State } from "../../types";

const defaultValue:State = {
    logged: false,
    user: {
        id: '',
        name: ''
    },
    login: () => {}
}

export const AuthContext = createContext(defaultValue);