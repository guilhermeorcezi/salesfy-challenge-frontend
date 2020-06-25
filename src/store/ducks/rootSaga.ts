import { all, takeLatest } from 'redux-saga/effects';

import { WordsTypes } from './translate/types';
import { translate } from './translate/sagas';

export default function* rootSaga() {
	return yield all([takeLatest(WordsTypes.ADD_NEW_NUMBER_REQUEST, translate)]);
}
