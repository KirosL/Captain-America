import React from 'react'
export const Patrocinador = () => {

    return (
        <section>
            <h1 class='"card-text"'><br />
                <b> Patrocinador </b>
            </h1>
            <div id='intro' className='container-xxl'>

                <div class='row align-items-start'>
                    <h2 id='t'>
                        The Shield
                    </h2>
                    <div class='col mx-auto' >

                        <div id='carta' className="card"  >
                            <img id='cursos' className="img-thumbnail" src='https://thumb.bibliocad.com/images/content/00100000/8000/108852.gif' alt="" />
                            <div class="card-body">
                                <h5 class="card-title" > The Shield</h5>
                                <p class="card-text">Compañia que se enfoca en controlar los heroes, su recompensa es Equipo raro o superior; Equipo específico de héroe solo para el Capitán América; Objeto cosmético. </p>
                            </div>
                        </div>
                    </div>
                    <div class='col mx-auto'>
                        <div id='carta' className="card"  >
                            <img id='cursos' style={{height:"475px"}} className="img-thumbnail" src='https://www.xtrafondos.com/wallpapers/resized/cyberpunk-tony-stark-fanart-3235.jpg?s=large' alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Tony Stark</h5>
                                <p class="card-text">Es un magnate millonario el cual hace parte de los patrocinadores de los vengadores, aportando conocimiento y tecnologia avanzada</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>
                    <br />
                </h3>
            </div>
        </section>
    )
}

export default Patrocinador;