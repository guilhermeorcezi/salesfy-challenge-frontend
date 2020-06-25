import { action } from 'typesafe-actions';
import { WordsTypes } from './types';

export const add_number_translated_request = (number: number) =>
	action(WordsTypes.ADD_NEW_NUMBER_REQUEST, { number });

export const add_number_translated_success = (Translated: Object) =>
	action(WordsTypes.ADD_NEW_NUMBER_SUCCESS, Translated);

export const add_number_translated_failed = () =>
	action(WordsTypes.ADD_NEW_NUMBER_FAIL);
