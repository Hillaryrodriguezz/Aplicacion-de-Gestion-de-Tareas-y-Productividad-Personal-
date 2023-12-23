import './css/ProgresoXDia.css'

const ProgesoDia = ({ progText }) => {
    return (
        <>
            <div className='progreso-tareas-container'>
                <h2>{progText}</h2>
                <div className="container">
                    <div className="progress">
                        <span className="title timer" data-from="0" data-to="95" data-speed="1800">95</span>
                        <div className="overlay"></div>
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgesoDia;