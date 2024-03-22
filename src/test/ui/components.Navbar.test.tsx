import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth";
import { Navbar } from "../../ui";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navbar />', () => { 
    const initialState = {
        logged: true,
        user: {
            id: '69',
            name: 'Jacinto'
        },
        login: async () => {},
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el nombre del usuario', () => { 
        
        render(
            <AuthContext.Provider value={ initialState }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Jacinto' ) ).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando se hace clic en el boton logout', () => { 
        render(
            <AuthContext.Provider value={ initialState }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( initialState.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', { 'replace': true });
    });
});