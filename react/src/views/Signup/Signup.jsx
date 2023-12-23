import React, { useState } from 'react';
import axiosClient from "../../axios-client.js";
import { useStateContext } from "../../context/ContextProvider.jsx";
import "./SignupStyles.css";
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function Signup() {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const passwordConfirmationRef = React.createRef();
  const lastNameRef = React.createRef();
  const imageRef = React.createRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => { };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    const passwordInput = passwordRef.current;

    if (passwordInput) {
      passwordInput.type = showPassword ? 'password' : 'text';
    }
  };
  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: nameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    const formData = new FormData();
    formData.append("image", imageRef.current.files[0]);

    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });
    axiosClient
      .post('/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        toast.success('Registro exitoso');
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <>
      <Toaster />
      <div className="login">
        <div className="login__container">
          <div className="login__container__body">
            <div className="login__container__body__title">
              <h1 className='signup__title'>Registro</h1>
            </div>
            <div className="login__container__body__form">
              <form onSubmit={onSubmit}>
                <div className="login__container__body__form__input">
                  <input className="input" ref={imageRef} type="file" accept="image/*" />
                </div>

                <div className="login__container__body__form__input">
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Nombre"
                    ref={nameRef}
                  />
                </div>

                <div className="login__container__body__form__input">
                  <input
                    type="text"
                    name="lastname"
                    className="input"
                    placeholder="Apellido"
                    ref={lastNameRef}
                  />
                </div>

                <div className="login__container__body__form__input">
                  <input
                    type="text"
                    name="email"
                    className="input"
                    placeholder="Correo electrónico"
                    ref={emailRef}
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
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="input"
                    placeholder="Contraseña"
                    // value={formData.password}
                    ref={passwordConfirmationRef}
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
                  <button type="submit">Registrase</button>
                </div>
                <div className="login__container__body__register">
                  <p>
                    ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
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









