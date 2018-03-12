import React from 'react';
import { Link } from 'react-router-dom';

const TmSideMenu = props => {

    return (
        <div id="tm-sidemenu">
            <ul>
                {/* <i className="material-icons">account_circle</i> */}
                <li><Link to="/task/list"><i className="material-icons">assignment</i></Link></li>
                <li><Link to="/department/list"><i className="material-icons">folder</i></Link></li>
            </ul>
        </div>
    )
}

export default TmSideMenu;