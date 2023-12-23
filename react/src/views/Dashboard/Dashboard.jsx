import React, { useState, useEffect } from 'react';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { useStateContext } from '../../context/ContextProvider';
import Carga from '../Carga/Carga'; // Asegúrate de importar el componente Carga
import LeftSideMenu from '../../components/LeftSideMenu';
import BienvenidaDashboard from '../../components/BienvenidaDashboard'
import ResumenTareas from '../../components/tareasPendientes';
import ProgesoDia from '../../Components/ProgresoXDia';
import TodoFilter from '../../Components/todoFilter';
import Calendar from '../../Components/calendar';
import './Dashboard.css';
import axiosClient from '../../axios-client';
const Dashboard = () => {
  const { user, token, setUser, setToken, notification } = useStateContext();
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [pendingTasksCount, setPendingTasksCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Obtener día de la semana y fecha en formato legible
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  useEffect(() => {
    // Simula una carga asíncrona (puedes reemplazar esto con tu lógica real)
    const fetchData = async () => {
      // Realiza cualquier lógica de carga aquí
      // Por ejemplo, puedes hacer una llamada a la API para obtener datos
      // Simulación de espera de 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false); // Cambia el estado para indicar que la carga ha terminado
    };

    fetchData();
  }, []); // La carga se realiza solo una vez al montar el componente
  const fullImagePath = user.image_path ? `http://localhost:8000/${user.image_path}` : null;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosClient.get(`/tasks/${user.id}`);
        const fetchedTasks = response.data.tasks;
        setTasks(fetchedTasks);
        // Contar solo las tareas pendientes
        const pendingTasks = fetchedTasks.filter(task => task.state === "Pendiente").length;
        setPendingTasksCount(pendingTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [user.id]);

  return (
    <div className="dashboard__container">
      {loading ? ( // Muestra la pantalla de carga si la carga está en progreso
        <Carga />
      ) : (
        <>
          <div className="dashboard-container">
            <LeftSideMenu />
            <div className='right-side'>
              <div>
                <h2 className='page-title'>Dashboard</h2>
                <h3 className='page-date'>{formattedDate}</h3>
              </div>
              <BienvenidaDashboard
                pic={fullImagePath}
                nombre={user.name}
                apellido={user.last_name}
                dias={pendingTasksCount}
                porcentaje='70' />
              <div className='resume-container'>
                <ResumenTareas />
                {/* <ProgesoDia progText='Progreso en el dia' />
                <ProgesoDia progText='Progreso en la semana' /> */}
                <Calendar />
              </div>
              <div className="todoFilter">
                <TodoFilter />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;





