import './auth.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

export default function Login(props) {
    const {
        username,
        password,
        setUsername,
        setPassword
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='login'>
            <h3>Sign in with your account</h3>

            <Input icon={faUser}
            label='Username:'
            type='text'
            className='form-group'
            value={username}
            setValue={setUsername}/>

            <Input icon={faKey}
            label='Password:'
            type={showPassword ? 'text' : 'password'}
            className='form-group'
            value={password}
            setValue={setPassword}
            isPassword={true}
            showPassword={showPassword}
            setShowPassword={() => setShowPassword(!showPassword)}/>

            <Button className='btn hover sign'
            text='Sign In'
            icon={faKey}
            onClick={() => {}}/>
        </div>
    );
}

Login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    setUsername: PropTypes.func,
    setPassword: PropTypes.func
}

Login.defaultProps = {
    username: '',
    password: '',
    setUsername: () => {},
    setPassword: () => {}
}
