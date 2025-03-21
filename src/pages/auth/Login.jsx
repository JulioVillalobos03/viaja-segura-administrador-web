import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonOutline, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import logoImage from '../../assets/Logo.png';
import '../../styles/global.css';
import '../../styles/pages/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        navigate('/home');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <img src={logoImage} alt="Logo" />
            </div>
            <div className="login-right">
                <h3 className="login-title">Iniciar Sesión</h3>

                <div>
                    <label htmlFor="username" className="login-label">Usuario</label>
                    <div className="input-container">
                        <input 
                            id="username" 
                            type="text" 
                            placeholder="Ingresa tu usuario" 
                            className="login-input"
                        />
                        <PersonOutline className="input-icon" />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="login-label">Contraseña</label>
                    <div className="input-container">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Ingresa tu contraseña"
                            className="login-input"
                        />
                        {showPassword ? (
                            <VisibilityOffOutlined className="input-icon" onClick={togglePasswordVisibility} />
                        ) : (
                            <VisibilityOutlined className="input-icon" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                </div>

                <button className="btn-login" onClick={handleLogin}>
                    Iniciar Sesión
                </button>
            </div>
        </div>
    );
};

export default Login;
