import React from 'react';

const TmHeader = props => {
    return (
        <div id="tm-header">
            <div className="col-1 pad-1"><i className="material-icons">keyboard_arrow_left</i></div>
            <div className="col-22">
                <h1 className="ta-center">Taskman</h1>
            </div>
            <div className="col-1 ta-right pad-1"><i className="material-icons">add</i></div>
        </div>
    );
};

export default TmHeader;