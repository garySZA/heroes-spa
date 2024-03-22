import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../auth';
import { PublicRoute } from '../../router/PublicRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => { 
    test('Debde de mostrar el children si no esta autenticado', () => { 
        const contextValue = {
            logged: false,
            user: {
                id: 'null',
                name: 'null'
            },
            login : async () => {},
            logout: () => {}
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta publica') )
    });

    test('Debe de navegar si está autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                id: 'userTest02',
                name: 'TestUser02'
            },
            login : async () => {},
            logout: () => {}
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    
                    <Routes>
                        <Route path='login' element={ 
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={ <h1>Página de marvel</h1> }/>
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página de marvel') ).toBeTruthy();
    });
});