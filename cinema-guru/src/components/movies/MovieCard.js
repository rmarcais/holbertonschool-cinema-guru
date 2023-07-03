import './movies.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faS, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty, faClock as faClockEmpty } from '@fortawesome/free-regular-svg-icons';

export default function MovieCard(props) {
    const { movie } = props;

    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => { 
        const accessToken = localStorage.getItem('accessToken');
        const headers = {authorization: `Bearer ${accessToken}`}

        axios.get("http://localhost:8000/api/titles/favorite", { headers })
        .then((res) => {
            if (res.data.find((m) => m.id === movie.id)) setIsFavorite(true);
        });

        axios.get("http://localhost:8000/api/titles/watchlater", { headers })
        .then((res) => {
            if (res.data.find((m) => m.id === movie.id)) setIsWatchLater(true);
        });
    }, [movie.id]);

    function handleClick(type) {
        const accessToken = localStorage.getItem('accessToken');
        const headers = {authorization: `Bearer ${accessToken}`}

        axios.post(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, {}, { headers })
        .then((res) => {
            if (type === 'favorite') setIsFavorite(true);
            else if (type === 'watchlater') setIsWatchLater(true);
        });
    }

    return (
        <li className='movie-card'>
            <FontAwesomeIcon icon={isWatchLater ? faClock : faClockEmpty} onClick={() => handleClick('favorite')}/>
            <FontAwesomeIcon icon={isFavorite ? faStar : faStarEmpty} onClick={() => handleClick('watchlater')}/>
            <p className='movie-title'>{movie.title}</p>
            <p className='movie-synopsis'>{movie.synopsis}</p>
            <ul className='movie-genres'>
                {movie.genres.map((genre) => <li className='movie-genre'>{genre}</li>)}
            </ul>
        </li>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object
}

MovieCard.defaultProps = {
    movie: null
}
