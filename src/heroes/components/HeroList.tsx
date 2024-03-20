import { useMemo } from "react";
import { HeroCard, getHeroesByPublisher } from "..";
import { HeroListTypes } from "../../types";


export const HeroList: React.FC<HeroListTypes> = ({ publisher }) => {
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        heroe={ hero }
                    />
                ))
            }
        </div>
    )
}
