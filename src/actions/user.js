import { MODE_UPDATE, TITLE_UPDATE, INIT_UPDATE } from './types';

export const modeChange = (mode) => (dispatch) => {
    dispatch({
        type: MODE_UPDATE,
        mode,
    });
};

export const titleChange = (title) => (dispatch) => {
    dispatch({
        type: TITLE_UPDATE,
        title,
    });
};

export const initChange = (init) => (dispatch) => {
    dispatch({
        type: INIT_UPDATE,
        init,
    });
};
