import { MdOutlineDelete } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';


import './css/Tarea.css';
// import { BiSolidDashboard } from "react-icons/bi";

import user01 from './images/user-photo-01.png'
import axiosClient from "../axios-client";

export const TareaPendiente = ({ titulo, fecha, hora, label, task_id }) => {
    const handleCompleteClick = async () => {
        try {
            await axiosClient.put(`/tasks/${task_id}`, { state: "Completada" });
            toast.success('Tarea completada');
            await new Promise(resolve => setTimeout(resolve, 2000));
            window.location.reload();
        } catch (error) {
            console.error('Error completing task:', error);
        }
        console.log(task_id)
    };

    const handleDelete = async () => {
        try {
            await axiosClient.delete(`/tasks/${task_id}`);
            toast.success('Tarea eliminada');
            await new Promise(resolve => setTimeout(resolve, 2000));
            window.location.reload();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
        console.log(task_id)
    };

    return (
        <div className='task-container'>
            <Toaster />
            <div className='info-container'>
                <h3>{titulo}</h3>
                <div className='date-container'>
                    <span>{fecha} |</span>
                    <span>{hora}</span>
                </div>
            </div>
            <div className="controls__container">
                <button onClick={handleCompleteClick}>
                    <FaRegCheckCircle className="control__ico" />
                </button>
                <button onClick={handleDelete}>
                    <MdOutlineDelete className="control__ico" />
                </button>
            </div>
        </div>
    )
}

export const ReunionPendiente = ({ titulo, fecha, hora, label }) => {
    return (
        <div className='task-container'>
            <img src={user01}></img>
            <div className='info-container'>
                <h3>{titulo}</h3>
                <div className='date-container'>
                    <span>{fecha} | </span>
                    <span>{hora}</span>
                </div>
            </div>
        </div>
    )
}


export const TareaLista = ({ titulo, fecha, hora, label, task_id }) => {
    const handleTodoClick = async () => {
        try {
            await axiosClient.put(`/tasks/${task_id}`, { state: "Pendiente" });
            toast.success('Tarea pendiente');
            await new Promise(resolve => setTimeout(resolve, 2000));
            window.location.reload();
        } catch (error) {
            console.error('Error completing task:', error);
        }
        console.log(task_id)
    };
    const handleDelete = async () => {
        try {
            await axiosClient.delete(`/tasks/${task_id}`);
            toast.success('Tarea eliminada');
            await new Promise(resolve => setTimeout(resolve, 2000));
            window.location.reload();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
        console.log(task_id)
    };
    return (
        <div className='task-container'>
            <Toaster />
            <div className='info-container complete'>
                <h3>{titulo}</h3>
                <div className='date-container'>
                    <span>{fecha} |</span>
                    <span>{hora}</span>
                </div>
            </div>
            <div className="controls__container">
                <button onClick={handleTodoClick}>
                    <MdCancel className="control__ico" />
                </button>
                <button onClick={handleDelete}>
                    <MdOutlineDelete className="control__ico" />
                </button>
            </div>
        </div>
    )
}