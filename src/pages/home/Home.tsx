import React from 'react';
import { IonContent } from '@ionic/react';
import './Home.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from './BackgroundHome.png';
import NoDecorLink from '../../components/NoDecorLink/NoDecorLink';
import { modeChange } from '../../actions/user';
import { TRAIN, TEST, FREE } from '../../util/const';

const Home = ({ init, handleModeChange }: any) => {
    return (
        <>
            {init && <Redirect to="/init" />}
            <IonContent>
                <div id="home" style={{ backgroundImage: `url(${Background})` }}>
                    <h2 className="home-title">Pilih Menu</h2>

                    <NoDecorLink to="/play" style={{ width: '70%' }}>
                        <CustomButton
                            style={{ marginBottom: '1em' }}
                            onClick={() => {
                                handleModeChange(FREE);
                            }}
                        >
                            Free Mode
                        </CustomButton>
                    </NoDecorLink>
                    <NoDecorLink to="/train" style={{ width: '70%' }}>
                        <CustomButton
                            light
                            style={{ marginBottom: '1em' }}
                            onClick={() => {
                                handleModeChange(TRAIN);
                            }}
                        >
                            Train
                        </CustomButton>
                    </NoDecorLink>
                    <NoDecorLink to="/test" style={{ width: '70%' }}>
                        <CustomButton
                            orange
                            style={{ marginBottom: '1em' }}
                            onClick={() => {
                                handleModeChange(TEST);
                            }}
                        >
                            Test
                        </CustomButton>
                    </NoDecorLink>
                </div>
            </IonContent>
        </>
    );
};

const mapStateToProps = (state: { init: any }) => ({
    init: state.init,
});

const mapDispatchToProps = (dispatch: any) => ({
    handleModeChange: (mode: any) => {
        dispatch(modeChange(mode));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
