import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import {
	add_number_translated_success,
	add_number_translated_failed,
} from './actions';

interface Action {
	type: string;
	payload: {
		number: number;
	};
}

export function* translate({ payload }: Action) {
	try {
		const res = yield call(api.get, `?translate=${payload.number}`);
		yield put(add_number_translated_success(res.data));
	} catch (err) {
		toast.error('Connection Error. Try again');
		add_number_translated_failed();
	}
}
