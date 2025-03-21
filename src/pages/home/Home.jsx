import React, { useState } from 'react';
import Shortcuts from '../../components/home/Shortcuts';
import Dashboard from '../../components/common/Dashboards';
import RegisterUserModal from '../../components/home/RegisterUserModal';

const Home = () => {
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);

    const handleOpenUserModal = () => {
        setIsUserModalOpen(true);
    };

    const handleCloseUserModal = () => {
        setIsUserModalOpen(false);
    };

    return (
        <div>
            <h1>Inicio</h1>
            <Shortcuts
                onOpenUserModal={handleOpenUserModal}
                onOpenVehicleModal={handleOpenUserModal}
            />
            <Dashboard />
            <RegisterUserModal open={isUserModalOpen} handleClose={handleCloseUserModal} />
        </div>
    );
};

export default Home;