// src/components/login.js

import React, { useState } from 'react';
import { login } from '../services/api'; // Importa la función para hacer login

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Usa la función de la API para hacer la solicitud
    login(username, password)
      .then(response => {
        console.log('Login successful:', response.data);
        // Aquí puedes manejar la respuesta, como redirigir al usuario o almacenar el token
      })
      .catch(error => {
        console.error('Login error:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      });
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Acceder</button>
      </form>
    </div>
  );
};

export default Login;



