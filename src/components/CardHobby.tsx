type Props = {
    info : String,
    img : string,
    fade?: String
}

function CardHobby({ info, img, fade = 'fade-left'} : Props) {
    return (
        <div className="card-hobby" data-aos={ fade } >
            <p>{ info }</p>
            <img src={ img } alt="Cargando"></img>
        </div>
    );
}


export default CardHobby;