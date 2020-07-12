import { MODE_UPDATE } from '../actions/types';

const initialState = {
    mode: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODE_UPDATE:
            return {
                ...state,
                mode: action.mode,
            };
        default:
            return state;
    }
};

export default userReducer;
