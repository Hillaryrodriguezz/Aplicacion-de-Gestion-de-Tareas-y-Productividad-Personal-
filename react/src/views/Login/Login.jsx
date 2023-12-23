import axiosClient from "../../axios-client.js";
import { createRef } from "react";
import { useStateContext } from "../../context/ContextProvider.jsx";
import { useState } from "react";
import './LoginStyles.css';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const [showPassword, setShowPassword] = useState(false);

  const { setUser, setToken } = useStateContext()
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    const passwordInput = passwordRef.current;

    if (passwordInput) {
      passwordInput.type = showPassword ? 'password' : 'text';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" && formData.password === "") {
      toast.error('Debe ingresar un correo electronico y una contraseña');
    }
    else if (formData.email === "") {
      toast.error('Debe ingresar un correo electronico');
    }
    else if (formData.password === "") {
      toast.error('Debe ingresar una contraseña');
    }
    else {
      toast.success('Inicio de sesion exitoso');
      axiosClient.post('/login', formData)
        .then(({ data }) => {
          setUser(data.user)
          setToken(data.token);
        })
        .catch((err) => {
          const response = err.response;
          setMessage(response.data.message);
          notify(message);
        })
    }

    // Aquí puedes realizar la lógica de inicio de sesión con los datos almacenados en formData
  };

  return (
    <>
      <Toaster />

      <div className="login">
        <div className="login__container">
          <div className="login__container__body">
            <div className="login__container__body__title">
              <h1 className="login__title">Inicio de Sesión</h1>
            </div>
            <div className="login__container__body__form">
              <form onSubmit={handleSubmit}>
                <div className="login__container__body__form__input">
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Correo electrónico"
                    // value={formData.email}
                    ref={emailRef}
                    onChange={handleChange}
                  />
                </div>
                <div className="login__container__body__form__input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="input"
                    placeholder="Contraseña"
                    // value={formData.password}
                    ref={passwordRef}
                    onChange={handleChange}
                  />
                  <span
                    className="hide__button"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
                <div className="login__container__body__form__input">
                  <button type="submit">Iniciar sesión</button>
                </div>
                <div className="login__container__body__register">
                  <p>
                    ¿No tienes una cuenta? <a href="/signup">Regístrate</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <section>
          <div class='air air1'></div>
          <div class='air air2'></div>
          <div class='air air3'></div>
          <div class='air air4'></div>
        </section>
      </div>

    </>
  );
}
