import '../style/Portfolio.scss'
import dB from '../dB/page.json'
import CardProject from '../component/CardProject';
import { BiHomeAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


function Portfolio() {

    const nav = useNavigate()

    return (  
        <>
            <header className="social">
                <h1>Portafolio</h1>
                <button onClick={ ()=> nav('/') } title='Vuelve al inicio'>
                    <BiHomeAlt size={40}/>
                </button>
            </header>
            <div className="description">
                <h2>Aqui estan todos mis trabajos ;)</h2>
                <p>
                    Hasta ahora llevo un recorrido modesto, espero en proximas edicciones mejorarlo y llenarlo de proyectos geniales, que solo el tiempo dira.                
                </p>
            </div>
            <div className="web">
                {
                    dB.map( (e, i) => {
                        const state = i % 2 ?'fade-left' :'fade-right'
                        return <CardProject objet={e} fade={state} /> 
                    })
                }
            </div>
        </>
    );
}

export default Portfolio;