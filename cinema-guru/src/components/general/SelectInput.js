import './general.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function SelectInput(props) {
    const {
        label,
        options,
        Multiple,
        className,
        value,
        setValue
    } = props;

    function handleSelect(e) {
        setValue(e.target.value);
    }

    return (
        <div className={className}>
            <label>{label}</label>
            <select multiple={Multiple} value={value} onChange={handleSelect}>
                {options.map((opt, index) =>
                <option key={index} value={opt.value}>{opt.text}</option>
                )}
            </select>
        </div>
    );
}

SelectInput.porpTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    Multiple: PropTypes.bool,
    className: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired
}

SelectInput.defaultProps = {
    Multiple: false
}
