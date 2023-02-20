import '../style/Portfolio.scss'
import dB from '../dB/page.json'
import CardProject from '../components/CardProject';
import { BiHomeAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
import Text from '../tools/Text';
import { useContext, useEffect, useState } from 'react';
import LanguageContext from '../container/Language';


function Portfolio() {

    const [ data, setData ] = useState(dB)

    const { userLanguage } = useContext( LanguageContext )

    const nav = useNavigate()

    useEffect(
        ()=>setData( data ),
        [userLanguage]
    )

    const CardPortfolio = () =>{
        return(
            <>
                {
                data.map( (e, i) => {
                    const state = i % 2 ?'fade-left' :'fade-right'
                    return <CardProject objet={e} fade={state} /> 
                })
                }
            </>
        )
    }

    return (  
        <>
            <LanguageSelector/>
            <header className="social">
                <h1><Text tid="portfolio"/></h1>
                <button onClick={ ()=> nav('/') } title='Vuelve al inicio'>
                    <BiHomeAlt size={40}/>
                </button>
            </header>
            <div className="description">
                <h2><Text tid="description-h2"/></h2>
                <p>
                    <Text tid="description-p"/>              
                </p>
            </div>
            <div className="web">
                <CardPortfolio />
            </div>
        </>
    );
}

export default Portfolio;