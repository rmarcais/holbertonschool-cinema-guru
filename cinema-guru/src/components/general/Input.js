import './general.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Input(props) {
    const {
        label,
        type,
        className,
        value,
        setValue,
        icon,
        inputAttributes
    } = props;

    function handleInput(e) {
        setValue(e.target.value);
    }

    return (
        <div className={className}>
            {icon && <FontAwesomeIcon icon={icon}/>}
            <label>{label}</label>
            <input
            id="semething"
            type={type}
            value={value}
            onChange={handleInput}
            {...inputAttributes}/>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
    icon: PropTypes.object,
    inputAttributes: PropTypes.object
}

Input.defaultProps = {
    icon: null,
    inputAttributes: null
}
