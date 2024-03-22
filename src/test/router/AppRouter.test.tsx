import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../router/AppRouter";
import { MarvelPage } from "../../heroes";

describe('Pruebas en <AppRouter />', () => { 
    test('Debe de mostrar el login si no está autenticado', () => { 
        const contextValue = {
            logged: false,
            user: {
                id: 'null',
                name: 'null'
            },
            login: async () => {},
            logout: () => {}
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Login').length ).toBe(2);
    });

    test('Debe de mostrar el componente de Marvel si está autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                id: 'test04',
                name: 'UserTest04'
            },
            login: async () => {},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <MarvelPage />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Marvel Comics') ).toBeTruthy();
    });
});