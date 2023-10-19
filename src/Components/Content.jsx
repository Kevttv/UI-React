import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Content({ userName }) {
    const [randomPhoto, setRandomPhoto] = useState(null);
    const apiKey = 'Tz61g6raODwzRAokBkC2fguWjGVoMn52rrhQ77LcG0kbx0UK7vmZcWXy '; // Reemplaza con tu clave de API de Pexels

    useEffect(() => {
        async function fetchRandomPhoto() {
            try {
                const response = await axios.get('https://api.pexels.com/v1/curated', {
                    headers: {
                        Authorization: apiKey,
                    },
                });

                if (response.status === 200) {
                    const data = response.data;
                    const randomIndex = Math.floor(Math.random() * data.photos.length);
                    setRandomPhoto(data.photos[randomIndex]);
                } else {
                    console.error('Error al obtener fotos de Pexels:', response.statusText);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        }

        fetchRandomPhoto();
    }, [apiKey]);

    return (
        <div className="content-photo">
            {randomPhoto && (
                <div key={randomPhoto.id}>
                    <img src={randomPhoto.src.large} alt={randomPhoto.photographer} />
                </div>
            )}
        </div>
    );
}
