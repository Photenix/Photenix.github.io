type Props = {
    info : String,
    fade?: String
}

function CardHobby({ info, fade = 'fade-left'} : Props) {
    return (
        <div className="card-hobby" data-aos={ fade } >
            <p>{ info }</p>
            <img src="" alt=""></img>
        </div>
    );
}


export default CardHobby;