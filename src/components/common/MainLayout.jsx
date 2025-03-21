import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../../styles/components/DashboardLayout.css';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
};