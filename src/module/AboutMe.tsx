import { useState, useContext, useEffect } from "react";
import CardHobby from "../components/CardHobby";
import LanguageContext from "../container/Language";
import dB from '../dB/aboutMeHobbies.json'

import '../style/CardsHobbies.scss'
import Text from "../tools/Text";

function AboutMe() {
    const { dictionary } = useContext( LanguageContext )
    const [ data, setData ] = useState(dictionary.hobbies)

    useEffect( 
        ()=> setData(dictionary.hobbies),
        [dictionary]
    )

    const Cards = () => {
        return(
            data.map( (e : any , i : any ) => {
                const { img, info } = e
                const state = i % 2 ?'fade-left' :'fade-right'
                return <CardHobby  info={info} img ={img} fade={state}/>
            })
        )
    }

    return (
        <div id="about">
            <h2><Text tid="about"/></h2>
            { 
                <Cards/>
            }
        </div>
    );
}


export default AboutMe;