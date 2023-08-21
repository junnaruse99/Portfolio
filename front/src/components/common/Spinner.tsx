import React from 'react'
import './styles.css'

const SpinnerComponent = () => {
    return (
        <div className="snippet" data-title="dot-flashing">
            <div className="stage">
                <div className="dot-flashing"></div>
            </div>
        </div>
    );
}

export default SpinnerComponent;