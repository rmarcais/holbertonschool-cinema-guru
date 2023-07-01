import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Authentication from './routes/auth/Authentication';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {authorization: `Bearer ${accessToken}`}

    axios.post('http://localhost:8000/api/auth/', {}, headers)
    .then((res) => {
      if (res.status === 200) {
        setIsLoggedIn(true);
        setUserUsername(res.data.username);
      }
    }).catch(() => {
    });
  });

  return (
    <div className="App">
      {isLoggedIn && <p>Hello {userUsername}</p>}
      {!isLoggedIn && <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername}/>}
    </div>
  );
}
