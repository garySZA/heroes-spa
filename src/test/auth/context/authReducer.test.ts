import { authReducer, types } from "../../../auth";

describe('Pruebas en AuthReducer', () => { 
    const initialState = {
        logged: false,
        user: {
            id: 'null',
            name: 'null'
        }
    }

    const user = {
        id: 'testUser',
        name: 'Test User'
    }
    
    test(' Debe de retornar el estado por defecto', () => {
        const state = authReducer( initialState , { type: '', payload: initialState.user});

        expect( state ).toEqual( initialState );
    });

    test('Debe de ( login ) llamar el login autenticar y establecer el user', () => { 
        const action = {
            type: types.login,
            payload: user
        }

        const state = authReducer( initialState, action );

        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })
    });

    test('Debe de ( logout ) borrar el name del usuario y logged en false', () => { 
        const state = {
            logged : true,
            user
        }

        const action = {
            type: types.logout,
            payload: initialState.user
        }

        const newState = authReducer( state, action );

        expect( newState ).toEqual({
            logged: false,
            user: initialState.user
        })
    });
 })