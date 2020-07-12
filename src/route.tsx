import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { playCircle, personCircle, musicalNotes } from 'ionicons/icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

/* Import Pages */
import Home from './pages/home/Home';
import Play from './pages/play/Play';
import PickSong from './pages/pickSong/PickSong';
import Gallery from './pages/gallery/Gallery';
import Review from './pages/review/Review';
import Profile from './pages/profile/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const Train = () => {
    return <PickSong title="Train" />;
};

const Test = () => {
    return <PickSong title="Test" />;
};

const App: React.FC = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <IonApp>
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Switch>
                                <Route path="/" render={() => <Redirect to="/home" />} exact />

                                {/* Menu Page */}
                                <Route path="/home" component={Home} exact />
                                <Route path="/train" component={Train} exact />
                                <Route path="/test" component={Test} exact />
                                <Route path="/play" component={Play} exact />
                                <Route path="/profile" component={Profile} exact />
                                <Route path="/gallery" component={Gallery} exact />
                                <Route path="/Review" component={Review} exact />
                            </Switch>
                        </IonRouterOutlet>

                        <IonTabBar slot="bottom">
                            <IonTabButton tab="play" href="/home">
                                <IonIcon icon={playCircle} />
                                <IonLabel>Play</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="gallery" href="/gallery">
                                <IonIcon icon={musicalNotes} />
                                <IonLabel>Gallery</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="profile" href="/profile">
                                <IonIcon icon={personCircle} />
                                <IonLabel>Profile</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
            </IonApp>
        </PersistGate>
    </Provider>
);

export default App;
