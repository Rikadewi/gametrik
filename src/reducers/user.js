import { MODE_UPDATE, TITLE_UPDATE, INIT_UPDATE } from '../actions/types';

const initialState = {
    mode: '',
    title: '',
    init: true,
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
        case INIT_UPDATE:
            return {
                ...state,
                init: action.init,
            };
        default:
            return state;
    }
};

export default userReducer;
