import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MailOutline,
    PersonOutline,
    PhoneOutlined,
    VisibilityOffOutlined,
    VisibilityOutlined,
    KeyboardArrowDownOutlined
} from '@mui/icons-material';
import logoImage from '../../assets/LogoColor.png';
import '../../styles/pages/UserRegisterPage.css';

const UserRegisterPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCancel = () => {
        navigate('/users');
    };

    const handleRegister = () => {
        navigate('/users');
    };

    return (
        <div className="register-container">
            <div className="register-left">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </div>
            <div className="register-right">
                <h2 className="form-title">Registrar usuario</h2>

                <div className="form-group">
                    <label htmlFor="username">Nombre(s)</label>
                    <div className="input-container-register">
                        <input
                            id="username"
                            type="text"
                            placeholder="Nombre(s)"
                            className="form-input"
                        />
                        <PersonOutline className="input-icon-right" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="mail">Correo electrónico</label>
                    <div className="input-container-register">
                        <input
                            id="mail"
                            type="email"
                            placeholder="Correo electrónico"
                            className="form-input"
                        />
                        <MailOutline className="input-icon-right" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <div className="input-container-register">
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Teléfono"
                            className="form-input"
                        />
                        <PhoneOutlined className="input-icon-right" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="role">Rol</label>
                    <div className="input-container-register select-container">
                        <select
                            id="role"
                            className="form-input form-select"
                            defaultValue=""
                        >
                            <option value="" disabled>Selecciona el rol</option>
                            <option value="passenger">Pasajero</option>
                            <option value="driver">Conductor</option>
                        </select>
                        <KeyboardArrowDownOutlined className="select-icon" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="login-label">Contraseña</label>
                    <div className="input-container-register">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Ingresa tu contraseña"
                            className="form-input"
                        />
                        {showPassword ? (
                            <VisibilityOffOutlined className="input-icon-right" onClick={togglePasswordVisibility} />
                        ) : (
                            <VisibilityOutlined className="input-icon-right" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                </div>
                <div className="button-group">
                    <button
                        className="btn btn-cancel"
                        onClick={handleCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        className="btn btn-register"
                        onClick={handleRegister}
                    >
                        Registrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserRegisterPage;