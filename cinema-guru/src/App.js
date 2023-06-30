import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

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
    });
  });
//App must return depending on the isLoggedIn state :
// - true: The Dashboard component (Will be built in later tasks)
// - false: The Authentication component (Will be built in later tasks)
  return (
    <div className="App">
      {isLoggedIn && <p>wahoouuuuu {userUsername}</p>}
      {!isLoggedIn && <p>Pas connecté</p>}
    </div>
  );
}
