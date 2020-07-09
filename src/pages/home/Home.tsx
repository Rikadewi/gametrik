import React from 'react';
import { IonContent } from '@ionic/react';
import './Home.css';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from './BackgroundHome.png';
import NoDecorLink from '../../components/NoDecorLink/NoDecorLink';

const Home = () => {
    return (
        <>
            <IonContent>
                <div id="home" style={{ backgroundImage: `url(${Background})` }}>
                    <h2 className="home-title">Pilih Menu</h2>

                    <NoDecorLink to="/play" style={{ width: '70%' }}>
                        <CustomButton style={{ marginBottom: '1em' }}>Free Mode</CustomButton>
                    </NoDecorLink>
                    <NoDecorLink to="/train" style={{ width: '70%' }}>
                        <CustomButton light style={{ marginBottom: '1em' }}>
                            Train
                        </CustomButton>
                    </NoDecorLink>
                    <NoDecorLink to="/test" style={{ width: '70%' }}>
                        <CustomButton orange style={{ marginBottom: '1em' }}>
                            Test
                        </CustomButton>
                    </NoDecorLink>
                </div>
            </IonContent>
        </>
    );
};

export default Home;
