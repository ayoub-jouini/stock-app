import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="lds-container">
            <img src='./asset/loading.svg' className="loading lds-dual-ring" />
        </div>
    )
}

export default LoadingSpinner;