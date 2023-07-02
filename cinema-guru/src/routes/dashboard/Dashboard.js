import './dashboard.css';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/navigation/Header';

export default function Dashboard(props) {
    const { userUsername, setIsLoggedIn } = props;

    return (
        <div className='dashboard'>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
        </div>
    );
}

Dashboard.propTypes = {
    userUsername: PropTypes.string,
    setIsLoggedIn: PropTypes.func
}

Dashboard.defaultProps = {
    userUsername: "",
    setIsLoggedIn: () => {}
}
