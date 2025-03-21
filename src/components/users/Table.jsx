import React, { useState } from "react";
import {
    DeleteOutlineOutlined,
    EditOutlined,
    PersonOutlineOutlined,
    RestoreFromTrashOutlined
} from "@mui/icons-material";
import "../../styles/components/users/UsersTable.css";
import PropTypes from 'prop-types';

const staticUsers = [
    { id: "1", name: "Cristopher Soto Ventura", email: "cristopher.sotoventura@gmail.com", role: { name: "Pasajero" }, status: true },
    { id: "2", name: "Yahir Degante Salinas", email: "yahirdesa@gmail.com", role: { name: "Conductor" }, status: true },
    { id: "3", name: "José García López", email: "jose.garcia@example.com", role: { name: "Pasajero" }, status: true },
    { id: "4", name: "María Rodríguez Pérez", email: "maria.rodriguez@example.com", role: { name: "Conductor" }, status: false },
    { id: "5", name: "Juan Hernández Sánchez", email: "juan.hernandez@example.com", role: { name: "Pasajero" }, status: true },
    { id: "6", name: "Guadalupe Martínez Torres", email: "guadalupe.martinez@example.com", role: { name: "Conductor" }, status: true },
    { id: "7", name: "Luis González Díaz", email: "luis.gonzalez@example.com", role: { name: "Pasajero" }, status: false },
    { id: "8", name: "Sofía Ramírez Castro", email: "sofia.ramirez@example.com", role: { name: "Conductor" }, status: true },
    { id: "9", name: "Daniel Flores Morales", email: "daniel.flores@example.com", role: { name: "Pasajero" }, status: true },
    { id: "10", name: "Fernanda Vargas Jiménez", email: "fernanda.vargas@example.com", role: { name: "Conductor" }, status: false },
    { id: "11", name: "Alejandro Castro Pérez", email: "alejandro.castro@example.com", role: { name: "Pasajero" }, status: true },
    { id: "12", name: "Isabel Mendoza García", email: "isabel.mendoza@example.com", role: { name: "Conductor" }, status: true },
    { id: "13", name: "Ricardo Sánchez Martínez", email: "ricardo.sanchez@example.com", role: { name: "Pasajero" }, status: false },
    { id: "14", name: "Elena Díaz Rodríguez", email: "elena.diaz@example.com", role: { name: "Conductor" }, status: true },
    { id: "15", name: "Andrés López Hernández", email: "andres.lopez@example.com", role: { name: "Pasajero" }, status: true },
    { id: "16", name: "Karla Pérez Flores", email: "karla.perez@example.com", role: { name: "Conductor" }, status: false }
];

const UsersTable = ({ searchTerm = "", activeCategory = "all" }) => {
    const [users] = useState(staticUsers);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const filteredUsers = currentUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    ).filter(user => activeCategory === "all" || user.role.name === activeCategory);

    return (
        <div className="users-table-container">
            <table className="users-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Tipo de Usuario</th>
                        <th>Correo electrónico</th>
                        <th>Acciones</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1 + indexOfFirstUser}</td>
                            <td>
                                <div className="user-name-cell">
                                    <button className={`user-icon-button ${!user.status ? 'inactive' : ''}`}>
                                        <PersonOutlineOutlined />
                                    </button>
                                    {user.name}
                                </div>
                            </td>
                            <td>{user.role.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className="actions-cell">
                                    {user.status ? (
                                        <>
                                            <button
                                                className="action-button edit"
                                                onClick={() => alert("Editar")}
                                            >
                                                <EditOutlined />
                                            </button>
                                            <button
                                                className="action-button delete"
                                                onClick={() => alert("Eliminar")}
                                            >
                                                <DeleteOutlineOutlined />
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            className="action-button restore"
                                            onClick={() => alert("Restaurar")}
                                        >
                                            <RestoreFromTrashOutlined />
                                        </button>
                                    )}
                                </div>
                            </td>
                            <td>
                                <span className={`status-badge ${user.status ? 'active' : 'inactive'}`}>
                                    {user.status ? "Activo" : "Inactivo"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

UsersTable.propTypes = {
    searchTerm: PropTypes.string,
    activeCategory: PropTypes.string
};

export default UsersTable;