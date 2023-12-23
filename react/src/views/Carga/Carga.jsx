import React from 'react';
import './CargaStyles.css';

const Carga = () => {
  return (
    <div className='carga__container'>
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Carga;
