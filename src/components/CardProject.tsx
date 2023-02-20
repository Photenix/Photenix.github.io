type props = {
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
import Text from "../tools/Text";

function CardProject({ objet, fade = 'fade-left' } : props ) {

    const { img, name, url, source } = objet

    return ( 
        <div className="card" data-aos={ fade }>
            <img src={ img }  alt="" />
            <h2>{ name } </h2>
            <a href={ url } target="_blank">
                <button className="card-button">
                    <Text tid="go-to"/>
                </button>
            </a>
            <a href={ source } target="_blank">
                <button className="card-button">
                    <BiCoffee size={30}/>
                    <Text tid="source-code"/>
                </button>
            </a>
        </div>
    );
}

export default CardProject;