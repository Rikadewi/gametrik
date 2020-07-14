/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { IonContent, IonSpinner } from '@ionic/react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Background from '../home/BackgroundHome.png';
import './Init.css';
import { initChange } from '../../actions/user';

const Init = ({ init, handleInitChange }: any) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [isMobile, setIsMobile] = React.useState(true);
    const [expire, setExpire] = React.useState(false);
    React.useEffect(() => {
        if (width > 600 || height > 1000) {
            setIsMobile(false);
        }

        setTimeout(() => {
            setExpire(true);
        }, 5000);
    }, [width, height]);

    return (
        <>
            {!init && <Redirect to="/home" />}
            <IonContent>
                <div id="init" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="init-box">
                        {!expire ? (
                            <>
                                <h6>
                                    <IonSpinner name="bubbles" />
                                    Mohon Menunggu
                                </h6>
                                <p className="init-msg">
                                    Kami sedang mencoba terkoneksi dengan Gametrik terdekat
                                </p>

                                <p className="init-tips">
                                    {isMobile
                                        ? 'Tips: Tekan tombol titik tiga pada kanan atas browser Anda, pilih Add to Home Screen'
                                        : 'Tips: PWA ini dioptimasi untuk penggunaan pada mobile phone. Gunakan mobile phone untuk pengalaman terbaik.'}
                                </p>
                            </>
                        ) : (
                            <div
                                onClick={() => {
                                    handleInitChange(false);
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                <h6>Gametrik Tidak Ditemukan</h6>
                                <p className="init-msg">
                                    Sebagai prototype, kami menyediakan sebuah mode demo. Tekan
                                    popup ini untuk melanjutkan ke mode demo
                                </p>

                                <p className="init-tips">
                                    Semua nilai pada test mode akan didapatkan secara random, dan
                                    terdapat dummy data yang dapat dicoba untuk kelancaran aplikasi
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </IonContent>
        </>
    );
};

const mapStateToProps = (state: { init: any }) => ({
    init: state.init,
});

const mapDispatchToProps = (dispatch: any) => ({
    handleInitChange: (init: any) => {
        dispatch(initChange(init));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Init);
