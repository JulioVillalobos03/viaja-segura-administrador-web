import React from 'react';
import { DirectionsCarFilledOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/home/Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const usersData = [
        { id: 1, name: "Yahir Degante", role: "Conductor", email: "yahir@gmail.com", phone: "555-1234" },
        { id: 2, name: "Cristopher Soto", role: "Pasajero", email: "soto@gmail.com", phone: "555-5678" },
        { id: 3, name: "Yahir Salinas", role: "Pasajero", email: "salinas@gmail.com", phone: "555-9012" },
    ];

    const vehiclesData = [
        { id: 1, model: "Prius", brand: "Toyota", plate: "ABC-123", driver: "Yahir Degante" },
        { id: 2, model: "March", brand: "Nissan", plate: "DEF-456", driver: "Cristopher Soto" },
        { id: 3, model: "Tsuru", brand: "Nissan", plate: "GHI-789", driver: "Cristopher Soto" },
    ];

    return (
        <div className="dashboard-container">
            <div className="section">
                <div className="section-header">
                    <h2>Usuarios</h2>
                    <button
                        onClick={() => navigate("/users")}
                        className="btn-view-more"
                    >
                        Ver más
                    </button>
                </div>
                <div className="data-table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Tipo de Usuario</th>
                                <th>Correo electrónico</th>
                                <th>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="data-name-cell">
                                            <button className="data-icon-button">
                                                <PersonOutlineOutlined />
                                            </button>
                                            {user.name}
                                        </div>
                                    </td>
                                    <td>{user.role}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="section">
                <div className="section-header">
                    <h2>Vehículos</h2>
                    <button
                        onClick={() => navigate("/manager/vehicles")}
                        className="btn-view-more"
                    >
                        Ver más
                    </button>
                </div>
                <div className="data-table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Conductor</th>
                                <th>Modelo</th>
                                <th>Marca</th>
                                <th>Placa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehiclesData.map((vehicle, index) => (
                                <tr key={vehicle.id}>
                                    <td>{index + 1}</td>
                                    <td className="data-name-cell">
                                        <button className="data-icon-button">
                                            <DirectionsCarFilledOutlined />
                                        </button>
                                        {vehicle.driver}
                                    </td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.brand}</td>
                                    <td>{vehicle.plate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;




