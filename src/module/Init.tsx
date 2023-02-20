import { useEffect } from "react";
import { exeChart } from "../components/showGrafit";
import AboutMe from "./AboutMe";
import '../style/Init.scss'

import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react'
import Navbar from "./Navbar";
import LanguageSelector from "../components/LanguageSelector";
import Text from "../tools/Text";
import LanguageContext from "../container/Language";

function Init() {
    const { userLanguage } = useContext( LanguageContext )

    const [ lang, setLang ] = useState(userLanguage)
    
    const nav = useNavigate()
    
    const handleOnClick = () => {
        window.scrollTo(0, 0)
        nav('/portfolio')
    }
    
    useEffect( ()=>{
        exeChart()
    },[])

    useEffect( ()=>{
        setLang(userLanguage)
    },[userLanguage])
    
    return ( 
        <>
            <LanguageSelector/>
            <div className="my-name" data-aos="fade-left">
                <img src="https://cdn.dribbble.com/users/10882/screenshots/3968914/media/a1de49e79bca30fc5bdfca0adf14cf00.png?compress=1&resize=400x300" alt="."/>
                <h1 id={"type-"+ lang }></h1>
            </div>
            <Navbar />
            <AboutMe/>
            <div className="skills" id="skills">
                <h2><Text tid="skills"/></h2>
                <canvas id="myChart"></canvas>
                <canvas id="my-chart-movil"></canvas>
            </div>

            <button onClick={ handleOnClick } id="portfolio">
                <Text tid="portfolio"/>
            </button>
        </>
    );
}

export default Init;