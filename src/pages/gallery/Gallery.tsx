/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { IonContent, IonIcon } from '@ionic/react';
import { play, pause } from 'ionicons/icons';
import './Gallery.css';
import ThreeDots from './more.svg';

const gundulAudio = new Audio(`${process.env.PUBLIC_URL}/assets/sound/gundul.mp3`);
const doremiAudio = new Audio(`${process.env.PUBLIC_URL}/assets/sound/doremi.mp3`);

const SongRow = ({ gallery, parentStateSetter, isCurrentlyPlay }: any) => {
    const [isPlay, setIsPlay] = React.useState(false);
    React.useEffect(() => {
        parentStateSetter(isPlay);
    }, [parentStateSetter, isPlay]);

    return (
        <div className="gallery-card">
            {isPlay && (
                <div
                    className="gallery-card-play"
                    onClick={() => {
                        if (gallery.path === 'gundul.mp3') {
                            gundulAudio.pause();
                        } else {
                            doremiAudio.pause();
                        }
                        setIsPlay(false);
                    }}
                >
                    <IonIcon icon={pause} />
                </div>
            )}
            {!isPlay && !isCurrentlyPlay && (
                <div
                    className="gallery-card-play"
                    onClick={() => {
                        if (gallery.path === 'gundul.mp3') {
                            gundulAudio.play();
                        } else {
                            doremiAudio.play();
                        }
                        setIsPlay(true);
                    }}
                >
                    <IonIcon icon={play} />
                </div>
            )}
            {!isPlay && isCurrentlyPlay && (
                <div className="gallery-card-play disabled">
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

    const [isCurrentlyPlay, setIsCurrentlyPlay] = React.useState(false);
    const wrapperSetIsCurrenlyPlay = React.useCallback(
        (val) => {
            setIsCurrentlyPlay(val);
        },
        [setIsCurrentlyPlay],
    );

    return (
        <>
            <IonContent>
                <div id="gallery">
                    <h1>Galeri</h1>
                    <div>
                        {galerries.map((gallery) => {
                            return (
                                <SongRow
                                    key={`${gallery.name}-${gallery.score}`}
                                    parentStateSetter={wrapperSetIsCurrenlyPlay}
                                    gallery={gallery}
                                    isCurrentlyPlay={isCurrentlyPlay}
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
