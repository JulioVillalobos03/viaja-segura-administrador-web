import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Searchbar from '../../components/common/Searchbar';
import UsersTable from '../../components/users/Table';
import '../../styles/pages/UsersPage.css';
import { PersonAddOutlined } from '@mui/icons-material';

const UsersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleRegisterClick = () => {
        navigate('/register-user');
    };

    return (
        <div className="users-page">
            <h1>Usuarios</h1>
            <div className="search-and-button-container">
                <Searchbar onChange={handleSearch} />
                <button className="add-user-button" onClick={handleRegisterClick}>
                    <PersonAddOutlined />
                    <p className="add-user-action">Registrar Usuarios</p>
                </button>
            </div>

            <div className="category-tabs">
                <button
                    className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('all')}
                >
                    Todos
                </button>
                <button
                    className={`category-tab ${activeCategory === 'Pasajero' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('Pasajero')}
                >
                    Pasajeros
                </button>
                <button
                    className={`category-tab ${activeCategory === 'Conductor' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('Conductor')}
                >
                    Conductores
                </button>
            </div>

            <div className="table-container">
                <UsersTable
                    searchTerm={searchTerm}
                    activeCategory={activeCategory}
                />
            </div>
        </div>
    );
};

export default UsersPage;