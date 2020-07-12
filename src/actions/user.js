import { MODE_UPDATE } from './types';

export const modeChange = (mode) => (dispatch) => {
    dispatch({
        type: MODE_UPDATE,
        mode,
    });
};
