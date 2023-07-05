import './movies.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';


export default function Tag(props) {
    const {
        genre,
        filter,
        genres,
        setGenres
    } = props;

    const [selected, setSelected] = useState(false);

    function handleTag() {
        if (selected) {
            setSelected(false);
            setGenres(genres.filter((g) => g !== genre).join(','));
        } else {
            setSelected(true);
            genres.push(genre)
            setGenres(genres.slice(1).join(','));
        }
    }

    return (
        <li className={selected ? 'tag selected' : 'tag'}
        onClick={() => {
            if (filter) handleTag();
        }}>{genre}</li>
    );
}

Tag.propTypes = {
    genre: PropTypes.string,
    filter: PropTypes.bool,
    genres: PropTypes.array,
    setGenres: PropTypes.func
}

Tag.defaultProps = {
    genre: '',
    filter: false,
    genres: [],
    setGenres: () => {}
}
