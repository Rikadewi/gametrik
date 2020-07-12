import { MODE_UPDATE, TITLE_UPDATE } from '../actions/types';

const initialState = {
    mode: '',
    title: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODE_UPDATE:
            return {
                ...state,
                mode: action.mode,
            };
        case TITLE_UPDATE:
            return {
                ...state,
                title: action.title,
            };
        default:
            return state;
    }
};

export default userReducer;
