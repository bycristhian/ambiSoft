import React from 'react'
import slider1 from '../img/slider1.jpg'
import slider4 from '../img/slider4.jpg'
import slider10 from '../img/slider10.jpg'

// Components
import ItemSlider from './ItemSlider'

class Slider extends React.Component {

    render(){
        return (
            <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">                    
                    <ItemSlider title="Reciclar no es una obligación, es TU responsabilidad" subtitle="El reciclaje es una de las maneras más fáciles de combatir el Calentamiento Global, ya que evitamos generar mayor contaminación reutilizando de nuevo las materias primas. Además el reciclaje puede salvar vidas recogiendo tapones." image={slider1} typeDiv="carousel-item active" />
                    <ItemSlider title="Title Slider1" subtitle="SUbtitle Slider1" image={slider4} typeDiv="carousel-item" />
                    <ItemSlider title="" subtitle="" image={slider10} typeDiv="carousel-item" />
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Slider