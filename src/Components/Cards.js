import React from 'react';
import Card from './Card.js';
import image1 from '../Assets/Aliados.jpeg';
import image2 from '../Assets/companeros.jpeg';
import image3 from '../Assets/rescate.jpeg';
import image4 from '../Assets/misiones.jpeg';
import image5 from '../Assets/patrocinador.jpeg';
import image6 from '../Assets/enemigos.jpeg';
import video from '../Assets/USA_flag.mp4';
import { Link} from 'react-router-dom'


const cards =[
    {
        id: 1,
        title: 'Aliados',
        image: image1,
        description:"",
        url:<Link to='/aliados' className="btn btn-outline-secondary rounded-0" >Aliados</Link>
    },
    {
        id: 2,
        title: 'Patrocinadores',
        image: image5,
        url:<Link to='/patrocinador' className="btn btn-outline-secondary rounded-0" >Patrocinadores</Link>
    },
    {
        id: 3,
        title: 'Personas Salvadas',
        image: image3,
        url:<Link to='/salvadas' className="btn btn-outline-secondary rounded-0" >Personas Salvadas</Link>
    },
    {
        id: 4,
        title: 'Compañeros de equipo',
        image: image2,
        url:<Link to='/compañeros' className="btn btn-outline-secondary rounded-0" >Compañeros de equipo</Link>
    },
    {
        id: 5,
        title: 'Enemigos',
        image: image6,
        url:<Link to='/enemigos' className="btn btn-outline-secondary rounded-0" >Enemigos</Link>
    },
    {
        id: 6,
        title: 'Misiones',
        image: image4,
        url:<Link to='/misiones' className="btn btn-outline-secondary rounded-0" >Misiones</Link>
    }

]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100" >
            <video className="video" src={video} autoPlay loop muted />
            <div className="row" >
                {
                    cards.map(card=>(
                        <div className="col-md-4" key={card.id} style={{padding: "15px"}} >
                        <Card 
                        title={card.title}
                        imageSource={card.image} 
                        url={card.url} />
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
export default Cards;
