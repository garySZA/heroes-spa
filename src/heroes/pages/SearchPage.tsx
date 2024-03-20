import React from "react";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard, getHeroesByName } from "..";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const searchString = location.search || '';
    const { q = '' } = queryString.parse( searchString ) as { q: string };
    
    const heroes = getHeroesByName( q );

    const { searchText, onInputChange } = useForm({
        searchText: q
    });
    
    const onSearchSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        // if( searchText.trim().length <= 1 ) return ;

        navigate(`?q=${ searchText.toLocaleLowerCase().trim() }`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            type="text" 
                            name="searchText" 
                            id="searchText" 
                            placeholder="Search a hero"
                            className="form-control"
                            autoComplete="off"
                            onChange={ onInputChange }
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        ( q === '' )
                            ? <div className="alert alert-primary animate__animated animate__fadeIn"> search a hero </div>
                            : ( heroes.length === 0 )
                                && <div className="alert alert-danger animate__animated animate__fadeIn"> No hero with <b>{ q }</b> </div>
                    }


                    {
                        heroes.map( hero => (
                            <HeroCard key={ hero.id } heroe={ hero } />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
