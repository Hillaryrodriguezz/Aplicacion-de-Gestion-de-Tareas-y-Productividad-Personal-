import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextProvider.jsx';
import axiosClient from '../../axios-client.js';
import toast, { Toaster } from 'react-hot-toast';
import './Help.css';

const HelpPage = ({ onClose, onCancel }) => {
    const titleRef = React.createRef();
    const descriptionRef = React.createRef();
    const dueDateRef = React.createRef();
    const stateRef = React.createRef();
    const { user, token, setUser, setToken, notification } = useStateContext();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = titleRef.current.value
        const description = descriptionRef.current.value
        const dueDate = dueDateRef.current.value
        const state = stateRef.current.value
        const userId = user.id

        toast.success('Problema enviado, te responderemos a la brevedad');
        await new Promise(resolve => setTimeout(resolve, 2000));
        window.location.reload();
    };

    return (
        <>

            <div className="login popup-overlay">
                <Toaster />
                <div className="login__container popup-container">
                    <div className="login__container__body">
                        <div className="login__container__body__title">
                            <h1>¿Necesitas ayuda?</h1>
                            <h4 className='help__subtitle'>Describe tu problema aqui</h4>
                        </div>
                        <div className="login__container__body__form">
                            <form onSubmit={handleSubmit}>
                                <div className="login__container__body__form__input">
                                    <input
                                        type="text"
                                        name="title"
                                        ref={titleRef}
                                        className="input"
                                        placeholder="Titulo del problema"
                                    />
                                </div>

                                <div className="login__container__body__form__input">
                                    <input
                                        type="text"
                                        ref={descriptionRef}
                                        name="description"
                                        className="input"
                                        placeholder="Descripcion del problema"
                                    />
                                </div>

                                <div className="login__container__body__form__input">
                                    <button type="submit" onClick={onClose}>Añadir</button>
                                </div>

                                <div className="login__container__body__form__input cancel__button">
                                    <button onClick={onCancel}>Cancelar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HelpPage;