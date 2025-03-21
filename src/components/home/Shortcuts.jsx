import React from "react";
import { PersonAddOutlined, DirectionsCarOutlined } from "@mui/icons-material";
import "../../styles/components/home/Shortcuts.css";
import PropTypes from 'prop-types';

const Shortcuts = ({ onOpenUserModal, onOpenVehicleModal }) => {
    return (
        <div className="shortcuts-wrapper">
            <div className="shortcuts-container">
                <h2>Accesos Directos</h2>
                <div className="shortcuts-grid">
                    <button className="shortcut-card" onClick={onOpenUserModal}>
                        <PersonAddOutlined className="shortcut-icon" />
                        <p className="shortcut-action">Registrar Usuarios</p>
                    </button>
                    <button className="shortcut-card" onClick={onOpenVehicleModal}>
                        <DirectionsCarOutlined className="shortcut-icon" />
                        <p className="shortcut-action">Registrar Vehículos</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

Shortcuts.propTypes = {
    onOpenUserModal: PropTypes.func.isRequired,
    onOpenVehicleModal: PropTypes.func.isRequired,
};

export default Shortcuts;