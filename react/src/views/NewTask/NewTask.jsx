import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextProvider.jsx';
import axiosClient from '../../axios-client.js';
import toast, { Toaster } from 'react-hot-toast';
import './NewTask.css';

const NewTaskPage = ({ onClose, onCancel }) => {
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

        try {
            await axiosClient.post('/tasks', { title, description, due_date: dueDate, state, user_id: userId }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Reload the page after successful submission
            toast.success('Tarea creada exitosamente');
            await new Promise(resolve => setTimeout(resolve, 2000));
            window.location.reload();
        } catch (error) {
            const response = error.response;
            if (response && response.status === 422) {
                // Handle validation errors if needed
                // setErrors(response.data.errors);
            } else {
                console.error('Error adding task:', error);
            }
        }
    };

    return (
        <>
            <div className="login popup-overlay">
                <Toaster />
                <div className="login__container popup-container">
                    <div className="login__container__body">
                        <div className="login__container__body__title">
                            <h1 className='task__title'>Añadir tarea</h1>
                        </div>
                        <div className="login__container__body__form">
                            <form onSubmit={handleSubmit}>
                                <div className="login__container__body__form__input">
                                    <input
                                        type="text"
                                        name="title"
                                        ref={titleRef}
                                        className="input"
                                        placeholder="Titulo de la tarea"
                                    />
                                </div>

                                <div className="login__container__body__form__input">
                                    <input
                                        type="text"
                                        ref={descriptionRef}
                                        name="description"
                                        className="input"
                                        placeholder="Descripcion de la tarea"
                                    />
                                </div>

                                <div className="login__container__body__form__input">
                                    <input
                                        type="datetime-local"
                                        ref={dueDateRef}
                                        name="expirationDate"
                                        className="input"
                                        placeholder="Hora de vencimiento"
                                    />
                                </div>

                                <div className="login__container__body__form__input">
                                    <select
                                        ref={stateRef}
                                        name="taskState"
                                        className="input"
                                    >
                                        <option value="" disabled selected>Selecciona un estado</option>
                                        <option value="Pendiente">Pendiente</option>
                                    </select>
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

export default NewTaskPage;