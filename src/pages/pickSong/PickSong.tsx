import React from 'react';
import { IonContent, IonIcon } from '@ionic/react';
import './PickSong.css';
import { star } from 'ionicons/icons';
import { connect } from 'react-redux';
import Ellipse from './Ellipse.png';
import Rectangle from './Rectangle.png';
import Header from '../../components/Header/Header';
import NoDecorLink from '../../components/NoDecorLink/NoDecorLink';
import { titleChange } from '../../actions/user';

import gundul from './song/gundul.jpg';
import doremi from './song/doremi.png';
import apuse from './song/apuse.jpg';
import PrauLayar from './song/prau-layar.jpeg';
import RasaSayange from './song/rasa-sayange.jpg';
import RekAyoRek from './song/rek-ayo-rek.jpg';

const Song = ({ level, src, name, ...props }: any) => {
    const temp: JSX.Element[] = [];
    for (let i = 0; i < level; i += 1) {
        temp.push(<IonIcon style={{ color: 'var(--ion-color-secondary)' }} key={i} icon={star} />);
    }

    for (let i = level; i < 5; i += 1) {
        temp.push(<IonIcon style={{ color: 'var(--ion-color-gray)' }} key={i} icon={star} />);
    }

    return (
        <div id="song" {...props}>
            <div>
                <NoDecorLink to="/play">
                    <div className="song-img" style={{ backgroundImage: `url(${src})` }} />
                </NoDecorLink>
                <p className="song-name">{name}</p>
                <div>{temp}</div>
            </div>
        </div>
    );
};

const PickSong = ({ title, handleTitleChange }: any) => {
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
                            <Song
                                level={3}
                                src={gundul}
                                name="Gundul-Gundul Pacul"
                                onClick={() => {
                                    handleTitleChange('Gundul-Gundul Pacul');
                                }}
                            />
                            <Song
                                level={5}
                                src={apuse}
                                name="Apuse"
                                onClick={() => {
                                    handleTitleChange('Apuse');
                                }}
                            />
                            <Song
                                level={1}
                                src={doremi}
                                name="Do Re Mi"
                                onClick={() => {
                                    handleTitleChange('Do Re Mi');
                                }}
                            />
                            <Song
                                level={5}
                                src={PrauLayar}
                                name="Prau Layar"
                                onClick={() => {
                                    handleTitleChange('Prau Layar');
                                }}
                            />
                            <Song
                                level={2}
                                src={RasaSayange}
                                name="Rasa Sayange"
                                onClick={() => {
                                    handleTitleChange('Rasa Sayange');
                                }}
                            />
                            <Song
                                level={4}
                                src={RekAyoRek}
                                name="Rek Ayo Rek"
                                onClick={() => {
                                    handleTitleChange('Rek Ayo Rek');
                                }}
                            />
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
                            <Song
                                level={1}
                                src={doremi}
                                name="Do Re Mi"
                                onClick={() => {
                                    handleTitleChange('Do Re Mi');
                                }}
                            />
                            <Song
                                level={3}
                                src={gundul}
                                name="Gundul-Gundul Pacul"
                                onClick={() => {
                                    handleTitleChange('Gundul-Gundul Pacul');
                                }}
                            />
                            <Song
                                level={4}
                                src={RekAyoRek}
                                name="Rek Ayo Rek"
                                onClick={() => {
                                    handleTitleChange('Rek Ayo Rek');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </IonContent>
        </>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    handleTitleChange: (title: any) => {
        dispatch(titleChange(title));
    },
});

export default connect(null, mapDispatchToProps)(PickSong);
