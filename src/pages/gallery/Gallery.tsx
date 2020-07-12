/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { IonContent, IonIcon } from '@ionic/react';
import { play, pause } from 'ionicons/icons';
import './Gallery.css';
import ThreeDots from './more.svg';

const SongRow = ({ gallery, audio }: any) => {
    const [isPlay, setIsPlay] = React.useState(false);

    return (
        <div className="gallery-card">
            {isPlay ? (
                <div
                    className="gallery-card-play"
                    onClick={() => {
                        audio.pause();
                        setIsPlay(false);
                    }}
                >
                    <IonIcon icon={pause} />
                </div>
            ) : (
                <div
                    className="gallery-card-play"
                    onClick={() => {
                        audio.play();
                        setIsPlay(true);
                    }}
                >
                    <IonIcon icon={play} />
                </div>
            )}
            <div className="gallery-card-text">
                <h5>{gallery.name}</h5>
                <p>Score: {gallery.score}</p>
            </div>
            <img src={ThreeDots} alt="three dots" />
        </div>
    );
};
const Gallery = () => {
    const galerries = [
        {
            name: 'Doremi',
            score: 100,
            path: 'doremi.mp3',
        },
        {
            name: 'Gundul-Gundul Pacul',
            score: 90,
            path: 'gundul.mp3',
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
                                <SongRow
                                    gallery={gallery}
                                    audio={
                                        new Audio(
                                            `${process.env.PUBLIC_URL}/assets/sound/${gallery.path}`,
                                        )
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </IonContent>
        </>
    );
};

export default Gallery;
