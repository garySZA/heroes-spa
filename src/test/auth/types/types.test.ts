import { types } from "../../../auth";

describe('Pruebas en Types.ts', () => { 
    test('Debe de regresar estos types', () => { 
        
        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    });
});