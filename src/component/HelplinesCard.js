// Import bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'
// Import custom CSS for HelplinesCard component
import './HelplinesCard.css';
import React from 'react';

// HelplinesCard component definition
function HelplinesCard({ name, number }) {
    return (
        <div className="col">
            <div className="card h-100 rounded-3">
                <div className="card-body py-3 rounded-3 helpline-card">
                    <h4 className="card-title helpline-card-title">{name}</h4>
                    <p className="card-text helpline-card-number">{number}</p>
                </div>
            </div>
        </div>
    );
}

export default HelplinesCard;