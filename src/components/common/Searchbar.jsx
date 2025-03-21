import { SearchOutlined } from "@mui/icons-material";
import React from "react";
import "../../styles/components/Searchbar.css";
import PropTypes from 'prop-types';

const Searchbar = ({ onChange }) => {
    return (
        <div className="searchbar-container">
            <div className="searchbar-wrapper">
                <input
                    type="text"
                    onChange={onChange}
                    placeholder="Buscar..."
                    className="searchbar-input"
                />
                <div className="searchbar-icon">
                    <span>
                        <SearchOutlined />
                    </span>
                </div>
            </div>
        </div>
    );
};

Searchbar.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Searchbar;