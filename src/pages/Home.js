
import React from 'react'

// Components
import Header from '../components/Header'
import Slider from '../components/Slider'
import ItemCaneca from '../components/ItemCaneca'
import Footer from '../components/Footer'

// Images
import CanecaAzul from '../img/azul.png'
import CanecaVerde from '../img/verde.png'
import CanecaGris from '../img/gris.png'
import CanecaAmarilla from '../img/amarilla.png'
import CanecaRoja from '../img/rojo.png'


class Home extends React.Component {

    state = {
        'itemsCanecaAzul': ['Plástico', 'Botellas de Vidrio', 'Botellas de plástico', 'Latas de aluminio', 'Cajas tetrapack', 'Cubiertos plásticos'],
        'itemsCanecaVerde': ['Empaques de mecato', 'Residuos de comida', 'Ordinarios', 'Icopor', 'Cerámica', 'Bolsas de aromáticas o té'],
        'itemsCanecaGris': ['Hojas de papel', 'Cartón', 'Periodico', 'Revistas', 'Cajas de zapatos', 'Sobres'],
        'itemsCanecaAmarilla': ['Pilas', 'Aluminio', 'Metal', 'Baterias']
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                <Slider />
                <br />
                <br />
                <div className="col-12 row mt-4">
                    <div className="col-md-6 m-4 container1">
                        <h3>¿QUÉ ES RECICLAR?</h3>
                        <p>El reciclaje es un proceso cuyo objetivo es convertir desechos en nuevos productos o en materia prima para su posterior utilización. Gracias al reciclaje se previene el desuso de materiales potencialmente útiles, se reduce el consumo de nueva materia prima, además de reducir el uso de energía.</p>
                    </div>
                    <div className="col-md-5 m-4">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/auj4bXMHL-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="container2 m-4">
                    <h4>¿CÓMO RECICLAR ADECUADAMENTE?</h4>
                    <p>Para iniciar el proceso de reciclaje, se debe consumir responsablemente y comenzar a reciclar desde el hogar para que se cumpla el proceso de una recolección, separación, procesamiento, comercialización y elaboración de un nuevo producto a partir de objetos inútiles. Los materiales que se pueden reciclar son principalmente el vidrio, cartón, papel, aluminio, plástico, textil, tetra pak, metales, alimentos, baterías, entre otros, que permiten minimizar la cantidad de residuos en el medio ambiente. <b><i>Para reciclar se debe separar o clasificar la basura en diferentes contenedores de acuerdo a los colores como:</i></b></p>
                </div>
                <br/>
                <br/>
                <div className="col-12 row">
                    <ItemCaneca title="Caneca azul" image={CanecaAzul} items={this.state.itemsCanecaAzul} />
                    <ItemCaneca title="Caneca verde" image={CanecaVerde} items={this.state.itemsCanecaVerde} />
                    <ItemCaneca title="Caneca gris" image={CanecaGris} items={this.state.itemsCanecaGris} />
                    <ItemCaneca title="Caneca Amarilla" image={CanecaAmarilla} items={this.state.itemsCanecaAmarilla} />
                    <ItemCaneca title="Caneca Roja" image={CanecaRoja} items={this.state.itemsCanecaAmarilla} />
                </div>
                <br/>
                <br/>
                <Footer />
            </React.Fragment>
        )
    }

    componentDidMount(){
        document.title = "AmbiSoft | Home"
    }
}

export default Home