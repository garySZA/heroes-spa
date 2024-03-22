import { ReactNode } from "react";

export interface HeroeTypes {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
}

export interface Form {
    [ key: string ]: string;
}

export interface State {
    logged: boolean;
    user: {
        id: string;
        name: string
    }
}

export interface Action {
    type: string;
    payload:
        {
            id: string;
            name: string
        }
}

export type User = {
    id: string;
    name: string;
}

export interface AuthProviderProps {
    children: ReactNode;
}