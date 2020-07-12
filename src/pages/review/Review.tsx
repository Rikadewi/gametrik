import React from 'react';
import { IonContent } from '@ionic/react';
import './Review.css';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Background from './BackgroundReview.png';

const Score = ({ score, color }: any) => {
    const temp: JSX.Element[] = [];
    for (let i = 0; i < score; i += 1) {
        temp.push(
            <span
                style={{ backgroundColor: `var(--ion-color-${color})` }}
                key={i}
                className="review-score"
            />,
        );
    }

    for (let i = score; i < 5; i += 1) {
        temp.push(
            <span
                style={{ backgroundColor: `var(--ion-color-${color}-shade)` }}
                key={i}
                className="review-score"
            />,
        );
    }

    return <div className="review-score-wrapper">{temp}</div>;
};

const Review = ({ title }: any) => {
    return (
        <>
            <IonContent>
                <div id="review" style={{ backgroundImage: `url(${Background})` }}>
                    <Header style={{ color: 'white', marginLeft: '1em' }} to="/home">
                        {title}
                    </Header>
                    <div className="review-card analysis">
                        <h6>Analisis</h6>
                        <div className="review-score-row">
                            <p>Tempo</p>
                            <Score score={3} color="tertiary" />
                        </div>
                        <div className="review-score-row">
                            <p>Akurasi</p>
                            <Score score={2} color="primary" />
                        </div>
                    </div>
                    <div className="review-card score">
                        <h6>Score</h6>
                        <div className="center">
                            <div className="review-score-ring center">
                                <div className="review-score-ring-inside center">
                                    <div className="review-score-ring-text">
                                        <p className="review-score-number">75</p>
                                        <p className="review-score-grade">Good!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </>
    );
};

const mapStateToProps = (state: { title: any }) => ({
    title: state.title,
});

export default connect(mapStateToProps, null)(Review);
