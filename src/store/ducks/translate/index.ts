import { Reducer } from 'redux';
import { TranslateState, WordsTypes } from './types';

const INITIAL_STATE: TranslateState = {
	data: [],
};

const reducer: Reducer<TranslateState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case WordsTypes.ADD_NEW_NUMBER_REQUEST:
            return state;
        case WordsTypes.ADD_NEW_NUMBER_SUCCESS:
            return {...state, data: [...state.data, action.payload]}
        case WordsTypes.ADD_NEW_NUMBER_FAIL:
            return state;
        default:
            return state
    }
};

export default reducer;
