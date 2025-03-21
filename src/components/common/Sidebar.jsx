import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, PeopleOutline, DirectionsCarOutlined, Commute, QrCode } from "@mui/icons-material";
import "../../styles/global.css";
import "../../styles/components/Sidebar.css";

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItems = [
        { name: "Inicio", icon: <HomeOutlined />, path: "/home" },
        { name: "Usuarios", icon: <PeopleOutline />, path: "/users" },
        { name: "Códigos QR", icon: <QrCode />, path: "/codigos-qr" },
        { name: "Vehículos", icon: <DirectionsCarOutlined />, path: "/vehiculos" },
        { name: "Viajes", icon: <Commute />, path: "/viajes" },
    ];

    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-menu">
                    {menuItems.map((item) => (
                        <li 
                            key={item.name} 
                            className="sidebar-item-container"
                        >
                            <Link 
                                to={item.path} 
                                className={`sidebar-link ${currentPath === item.path ? "active" : ""}`}
                            >
                                <span className="sidebar-icon">{item.icon}</span>
                                <span className="sidebar-text">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;