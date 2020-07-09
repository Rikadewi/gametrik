import React from 'react';
import { IonContent, IonIcon } from '@ionic/react';
import './PickSong.css';
import { star } from 'ionicons/icons';
import Ellipse from './Ellipse.png';
import Rectangle from './Rectangle.png';
import Song1 from './song1.png';
import Song3 from './song3.png';
// import Song2 from './song2.png';
// import Song4 from './song4.png';
// import Song5 from './song5.png';
// import Song6 from './song6.png';
// import Song7 from './song7.png';
// import Song8 from './song8.png';
// import Song9 from './song9.png';

import Header from '../../components/Header/Header';
import NoDecorLink from '../../components/NoDecorLink/NoDecorLink';

const Song = ({ level, src, name }: any) => {
    const temp: JSX.Element[] = [];
    for (let i = 0; i < level; i += 1) {
        temp.push(<IonIcon style={{ color: 'var(--ion-color-secondary)' }} key={i} icon={star} />);
    }

    for (let i = level; i < 5; i += 1) {
        temp.push(<IonIcon style={{ color: 'var(--ion-color-gray)' }} key={i} icon={star} />);
    }

    return (
        <div id="song">
            <div className="song-wrapper">
                <NoDecorLink to="/play">
                    <img src={src} alt="song-img" />
                </NoDecorLink>
                <p className="song-name">{name}</p>
                <div>{temp}</div>
            </div>
        </div>
    );
};
const PickSong = ({ title }: any) => {
    return (
        <>
            <IonContent>
                <div id="pick-song" style={{ backgroundImage: `url(${Ellipse})` }}>
                    <Header style={{ color: 'white' }} to="/home">
                        {title}
                    </Header>
                    <h4 className="pick-title" style={{ color: 'white' }}>
                        Pilih Sebuah Lagu
                    </h4>
                    <div className="pick-song-widget">
                        <div className="pick-song-wrapper">
                            <Song level={3} src={Song1} name="Kuman" />
                            <Song level={5} src={Song3} name="Empat" />
                            <Song level={3} src={Song1} name="Lain" />
                            <Song level={5} src={Song3} name="Perahu" />
                        </div>
                    </div>
                    <h4 className="pick-title" style={{ marginTop: '2em' }}>
                        Baru Dimainkan
                    </h4>
                    <div
                        className="pick-song-widget pick-song-played"
                        style={{ backgroundImage: `url(${Rectangle})` }}
                    >
                        <div className="pick-song-wrapper">
                            <Song level={3} src={Song1} name="Kuman" />
                            <Song level={5} src={Song3} name="Empat" />
                            <Song level={3} src={Song1} name="Lain" />
                            <Song level={5} src={Song3} name="Perahu" />
                        </div>
                    </div>
                </div>
            </IonContent>
        </>
    );
};

export default PickSong;
