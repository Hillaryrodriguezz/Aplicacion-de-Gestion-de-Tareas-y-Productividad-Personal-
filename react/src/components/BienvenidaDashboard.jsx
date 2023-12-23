import './css/BienvenidaDashboard.css';
import logo from './images/user-photo-01.png'


const BienvenidaDashboard = ({ nombre, apellido, dias, pic }) => {
    return (
        <div className='details-content'>
            <img src={pic}></img>
            <div className='user-info-container'>
                <h3>Hola, {nombre} {apellido}</h3>
                <p>Tienes {dias} tareas pendientes</p>
            </div>
        </div>
    )
}

export default BienvenidaDashboard;