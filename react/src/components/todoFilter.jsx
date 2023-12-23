import '../Components/css/todoFilterStyles.css'
import { TareaPendiente, ReunionPendiente, TareaLista } from '../components/Tarea'
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

const TodoFilter = () => {
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]); // Agrega este estado para las tareas completadas [1
    const { user } = useStateContext();

    useEffect(() => {
        const fetchTasksTodo = async () => {
            try {
                const response = await axiosClient.get(`/tasks/${user.id}`);
                // Filtra las tareas con el estado "Pendiente"
                const pendingTasks = response.data.tasks.filter(task => task.state === 'Pendiente');
                setTasks(pendingTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        const fetchTasksDone = async () => {
            try {
                const response = await axiosClient.get(`/tasks/${user.id}`);
                // Filtra las tareas con el estado "Pendiente"
                const doneTasks = response.data.tasks.filter(task => task.state === 'Completada');
                setDoneTasks(doneTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasksTodo();
        fetchTasksDone();
    }, [user.id]);

    return (
        <div className="todo-filter">
            <div className="filters-cont">
                <div className="todo">
                    <h3 className='filter-title'>Todo</h3>
                    {tasks.map(t => (
                        <div key={t.id}>
                            <TareaPendiente task_id={t.id} titulo={t.title} fecha={t.due_date} />
                        </div>
                    ))}
                </div>
                <div className="done">
                    <h3 className='filter-title'>Listo</h3>
                    {doneTasks.map(t => (
                        <div key={t.id}>
                            <TareaLista task_id={t.id} titulo={t.title} fecha={t.due_date} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoFilter;