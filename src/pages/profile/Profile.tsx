import React from 'react';
import { IonContent } from '@ionic/react';
import './Profile.css';
import Background from './BackgroundProfile.png';

const Profile = () => {
    return (
        <>
            <IonContent>
                <div id="profile" style={{ backgroundImage: `url(${Background})` }}>
                    <h1>Profile</h1>
                    <div>
                        <div className="profile-card">
                            <p className="profile-number">100</p>
                            <p className="profile-text">Score tertinggi</p>
                        </div>
                        <div className="profile-card">
                            <p className="profile-number">75</p>
                            <p className="profile-text">Rata-rata score</p>
                        </div>
                        <div className="profile-card">
                            <div className="profile-unit-wrapper">
                                <p className="profile-number">3</p>
                                <p className="profile-unit">kali</p>
                            </div>
                            <p className="profile-text">Bermain Gametrik</p>
                        </div>
                        <div className="profile-card">
                            <p className="profile-number">50</p>
                            <p className="profile-text">Rata-rata-akurasi</p>
                        </div>
                    </div>
                </div>
            </IonContent>
        </>
    );
};

export default Profile;
