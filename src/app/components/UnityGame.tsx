"use client"

import React, { useState } from 'react';

const UnityGame = () => {
  // Estado para mostrar u ocultar el juego
  const [showGame, setShowGame] = useState(false);

  // Función para mostrar el juego
  const handlePlay = () => {
    setShowGame(true);
  };

  // Función para cerrar el juego
  const handleClose = () => {
    setShowGame(false);
  };

  return (
    <div>
      {/* Botón para iniciar el juego */}
      <button
        onClick={handlePlay}
        style={{
            padding: '6px 12px',
            fontSize: '14px',
            borderRadius: '6px',
            backgroundColor: '#e2e8f0', // gris claro
            color: '#1a202c', // texto oscuro
            border: '1px solid #cbd5e0',
            cursor: 'pointer',
            width: 'fit-content',
        }}
        >
        ▶ Play
</button>

      {/* Contenedor a pantalla completa del juego */}
      {showGame && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            zIndex: 9999,
          }}
        >
          {/* Botón para salir */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#fff',
              color: '#333',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              zIndex: 10000,
            }}
          >
            Exit
          </button>

          {/* Iframe del juego */}
          <iframe
            src="/unitygame/index.html"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="Synapse Runner"
          />
        </div>
      )}
    </div>
  );
};

export default UnityGame;
