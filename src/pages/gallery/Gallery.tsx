import React from 'react';
import { IonContent, IonIcon } from '@ionic/react';
import { play } from 'ionicons/icons';
import './Gallery.css';
import ThreeDots from './more.svg';

const Gallery = () => {
    const galerries = [
        {
            name: 'Doremi',
            score: 100,
        },
        {
            name: 'Prau Layar',
            score: 75,
        },
        {
            name: 'Doremi',
            score: 20,
        },
        {
            name: 'Gundul-Gundul Pacul',
            score: 100,
        },
    ];
    return (
        <>
            <IonContent>
                <div id="gallery">
                    <h1>Galeri</h1>
                    <div>
                        {galerries.map((gallery) => {
                            return (
                                <div className="gallery-card">
                                    <div className="gallery-card-play">
                                        <IonIcon icon={play} />
                                    </div>
                                    <div className="gallery-card-text">
                                        <h5>{gallery.name}</h5>
                                        <p>Score: {gallery.score}</p>
                                    </div>
                                    <img src={ThreeDots} alt="three dots" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </IonContent>
        </>
    );
};

export default Gallery;
