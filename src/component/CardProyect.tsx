type prop = {
    objet : page,
    fade?: string,
}

interface page {
    img : string,
    name : string,
    url : string,
    source?: string
}

import { BiCoffee } from "react-icons/bi";

function CardProyect({ objet, fade = 'fade-left' } : prop ) {

    const { img, name, url, source } = objet

    return ( 
        <div className="card" data-aos={ fade }>
            <img src={ img }  alt="" />
            <h3>{ name } </h3>
            <a href={ url }>
                <button className="card-button">
                    Ir a pagina
                </button>
            </a>
            <a href={ source }>
                <button className="card-button">
                    <BiCoffee size={30}/>
                    codigo fuente
                </button>
            </a>
        </div>
    );
}

export default CardProyect;