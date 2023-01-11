import { useState } from "react";
import CardHobby from "../component/CardHobby";
import dB from '../dB/aboutMeHobbies.json'

import '../style/CardsHobbies.scss'

function CardsHobbies() {
    const [ data, setData ] = useState(dB)

    return (
        <div id="cards-hobbyies">
            { data.map( (e, i) => {
                const state = i % 2 ?'fade-left' :'fade-right'
                return <CardHobby  info={ e } fade={state}/>
            })}
        </div>
    );
}


export default CardsHobbies;