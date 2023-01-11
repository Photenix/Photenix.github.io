import { useEffect } from "react";
import { exeChart } from "../component/showGrafit";
import CardsHobbies from "./CardsHobbies";
import '../style/Init.scss'

import { useNavigate } from "react-router-dom";

function Init() {
    
    useEffect( ()=>{
        exeChart()
    },[])

    const nav = useNavigate()

    return ( 
        <>
            <div className="my-name" data-aos="fade-left">
                <h1>JM4P1R0</h1>
                <img src="." alt="."/>
            </div>
            <CardsHobbies/>
            <div className="skills">
                <p>Hola mundo, soy un programador front-end con conocimientos en :</p>
                <canvas id="myChart"></canvas>
                <canvas id="my-chart-movil"></canvas>
            </div>

            <button onClick={ ()=> nav('/portfolio')}>Portafolio</button>
        </>
    );
}

export default Init;