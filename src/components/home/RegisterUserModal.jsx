import React, { useState } from 'react';
import {
    Modal,
    Box,
    TextField,
    Button,
    MenuItem,
    Typography,
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const RegisterUserModal = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Registrar usuarios
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Nombre(s)"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Correo electrónico"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        select
                        label="Rol"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <MenuItem value="admin">Administrador</MenuItem>
                        <MenuItem value="user">Usuario</MenuItem>
                    </TextField>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Contraseña"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Registrar
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default RegisterUserModal;