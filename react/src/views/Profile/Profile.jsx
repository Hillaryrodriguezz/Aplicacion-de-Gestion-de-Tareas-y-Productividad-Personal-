import React from 'react';
import LeftSideMenu from '../../components/LeftSideMenu';
import './Profile.css';
import { useStateContext } from '../../context/ContextProvider';
import Carga from '../Carga/Carga';
import { useEffect, useState } from 'react';
import axiosClient from '../../axios-client';

const Profile = () => {
    const { user } = useStateContext();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const fullImagePath = user.image_path ? `http://localhost:8000/${user.image_path}` : null;




    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            setLoading(false);
        };
        fetchData();
        getUsers();
    }, []);

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
            .then(({ data }) => {
                setLoading(false)
                setUsers(data.data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <>
            {loading ? ( // Muestra la pantalla de carga si la carga está en progreso
                <Carga />
            ) : (
                <div className="profile__container">
                    <LeftSideMenu />
                    <div className='profile__content'>
                        <h1>Perfil de Usuario</h1>
                        <div className='profile__data'>
                            <img src={fullImagePath} alt="user-image" />
                            <div>
                                <h2>Nombre: {user.name} {user.last_name}</h2>
                                <h2>Correo: {user.email}</h2>
                            </div>

                        </div>
                        <div className='other__user__container'>
                            <h2>Otros usuarios:</h2>
                            <div className='other__content'>
                                {users.map(u => (
                                    <img
                                        key={u.id}
                                        src={u.image_path ? `http://localhost:8000/${u.image_path}` : null}
                                        alt="user-image" className='user__image' />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>

    );
};

export default Profile;
