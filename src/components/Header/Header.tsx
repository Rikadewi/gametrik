import React from 'react';
import { IonButtons, IonBackButton } from '@ionic/react';

import './Header.css';

const Header = ({ to, ...props }: any) => {
    return (
        <div id="header" {...props}>
            <IonButtons slot="start">
                <IonBackButton defaultHref={to} />
            </IonButtons>
            <h1 className="header-title"> {props.children}</h1>
        </div>
    );
};

export default Header;
