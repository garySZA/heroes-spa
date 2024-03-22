import { useContext } from "react"
import { AuthProviderProps } from "../types"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom";

export const PublicRoute: React.FC<AuthProviderProps> = ({ children }) => {
    const { logged } = useContext( AuthContext );

    return ( !logged )
        ? children
        : <Navigate to='/marvel'/> 
}
