import React, { useState } from "react";
import { PersonOutline, KeyboardArrowRight } from "@mui/icons-material";
import { Menu, MenuItem, IconButton, AppBar, Toolbar, Typography, Box } from "@mui/material";
import logoImage from "../../assets/LogoNab.png";
import "../../styles/global.css";
import "../../styles/components/Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log("Cerrando sesión...");
        handleMenuClose();
        navigate('/');
    };

    return (
        <AppBar position="static" className="navbar-container">
            <Toolbar className="navbar">
                <Box display="flex" alignItems="center" gap={2} className="navbar-logo">
                    <img src={logoImage} alt="Logo Viaja Segura" />
                    <Typography variant="h6" className="navbar-title">
                        Viaja Segura
                    </Typography>
                </Box>
                <Box className="navbar-right">
                    <IconButton onClick={handleMenuOpen} className="user-menu-button">
                        <PersonOutline />
                        <KeyboardArrowRight />
                    </IconButton>
                    <Menu
                        id="user-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        transformOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                        <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;