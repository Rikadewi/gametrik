import React from 'react';
import { IonContent, IonSpinner } from '@ionic/react';
import './Play.css';
import { connect } from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';
import NoDecorLink from '../../components/NoDecorLink/NoDecorLink';
import PlayBackground from './PlayBackground.png';
import CompassBackground from './CompassBackground.png';
import { TEST } from '../../util/const';

const Play = ({ mode }: any) => {
    const [init, setInit] = React.useState(true);
    const [record, setRecord] = React.useState(false);

    return (
        <>
            <IonContent>
                {init && (
                    <div id="play-alert">
                        <div className="play-alert-pop">
                            <p>Apakah Anda ingin merekam?</p>
                            <div className="play-alert-button">
                                <CustomButton
                                    style={{
                                        height: '42px',
                                        margin: '1em',
                                        width: '9em',
                                    }}
                                    onClick={() => {
                                        setInit(false);
                                        setRecord(true);
                                    }}
                                >
                                    Rekam
                                </CustomButton>
                                <CustomButton
                                    danger
                                    style={{
                                        height: '42px',
                                        margin: '1em',
                                        width: '9em',
                                    }}
                                    onClick={() => {
                                        setInit(false);
                                    }}
                                >
                                    Tidak
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                )}
                <div id="play" style={{ backgroundImage: `url(${PlayBackground})` }}>
                    <div className="play-card">
                        <div
                            className="play-icon"
                            style={{ backgroundImage: `url(${CompassBackground})` }}
                        >
                            <IonSpinner name="lines" />
                        </div>
                        <h1 className="play-title">Yuk Pukul Gametrikmu!</h1>
                        {record && (
                            <div className="play-record">
                                <span />
                                <p>Sedang Merekam</p>
                            </div>
                        )}
                    </div>
                    <NoDecorLink to={mode === TEST ? '/review' : '/home'}>
                        <CustomButton
                            danger
                            style={{
                                width: 'auto',
                                padding: '0 3em',
                            }}
                        >
                            Selesai
                        </CustomButton>
                    </NoDecorLink>
                </div>
            </IonContent>
        </>
    );
};

const mapStateToProps = (state: { mode: any }) => ({
    mode: state.mode,
});

export default connect(mapStateToProps, null)(Play);
