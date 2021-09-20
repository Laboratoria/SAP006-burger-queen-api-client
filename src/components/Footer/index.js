import React from 'react';
import './index.css'

function Footer() {
    return (
        <div className="footer">
            <div className= "container">
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} MEMES INC | All right reserved | Terms Of Service | Privacy

                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer