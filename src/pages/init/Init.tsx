import React from 'react';
import { IonContent, IonSpinner } from '@ionic/react';
import Background from '../home/BackgroundHome.png';
import './Init.css';
import NoDecorLink from '../../components/NoDecorLink/NoDecorLink';

const Init = () => {
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
                            <NoDecorLink to="/home">
                                <h6>Gametrik Tidak Ditemukan</h6>
                                <p className="init-msg">
                                    Sebagai prototype, kami menyediakan sebuah mode demo. Tekan
                                    popup ini untuk melanjutkan ke mode demo
                                </p>

                                <p className="init-tips">
                                    Semua nilai pada test mode akan didapatkan secara random, dan
                                    terdapat dummy data yang dapat dicoba untuk kelancaran aplikasi
                                </p>
                            </NoDecorLink>
                        )}
                    </div>
                </div>
            </IonContent>
        </>
    );
};

export default Init;
