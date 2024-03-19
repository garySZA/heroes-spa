import { HeroeTypes } from "."

export interface HeroListTypes {
    publisher: string
}

export interface HeroCardTypes {
    heroe: HeroeTypes;
}

export interface CharactersByHeroTypes {
    alter_ego: string;
    characters: string;
}