import React from 'react';
import './NotFoundStyles.css';
import Montaña from '../assets/montaña.svg'
export default function NotFound() {
  return (
    <div className='NotFound__container'>
      <div className="sidesfound__container">
        <div className='left__side'>
          <p className='NotFound__text'>Oops! 404 - Page Not Found</p>
          <p className='NotFound__subtext'>Parece que te has equivocado de dirección.</p>
          <a href="/" className='NotFound__subtext'>Ir al inicio</a>
        </div>
      </div>
    </div>
  );
}
