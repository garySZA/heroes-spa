import { types } from "..";
import { Action, State } from "../../types";

export const authReducer = ( state: State, action: Action ): State => {
    switch ( action.type ) {
        case types.login:
            
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:

            return {
                ...state,
                logged: false,
            };
    
        default:
            return state;
    }
}