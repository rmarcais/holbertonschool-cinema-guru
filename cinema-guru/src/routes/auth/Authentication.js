import './auth.css';
import Login from './Login';
import Register from './Register';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../components/general/Button';

export default function Authentication(props) {
    const { setIsLoggedIn, setUserUsername } = props;
    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signInUpProps = {
        username,
        password,
        setUsername: setUsername,
        setPassword
    };

    return (
        <div className='authentication'>
            <form className='authentication-form' onSubmit={(e) => e.preventDefault()}>
                <Button text='Sign In'
                className={_switch ? 'btn header active' : 'btn header'}
                onClick={() => set_switch(true)}/>

                <Button text='Sign Up'
                className={_switch ? 'btn header' : 'btn header active'}
                onClick={() => set_switch(false)}/>
                {_switch ? <Login {...signInUpProps}/> : <Register {...signInUpProps}/>}
            </form>
        </div>
        
    );
}

Authentication.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
    setUserUsername: PropTypes.func.isRequired
}
