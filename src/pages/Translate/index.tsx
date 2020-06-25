import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import * as S from './styles';

import { FiArrowRight } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { add_number_translated_request } from '../../store/ducks/translate/actions';
import api from '../../services/api';
import { toast } from 'react-toastify';
interface Translate {
	translated: string;
}

const Translate: React.FC = () => {
	const dispatch = useDispatch();
	const numbers = useSelector(
		({ translate }: ApplicationState) => translate.data
	);
	const [amountTranslated, setAmountTranslated] = useState('');
	const [newNumber, setNewNumber] = useState('');

	useEffect(() => {
		async function handleTranslateAmount() {
			await api
				.get<Translate>(`/?translate=${String(numbers.length)}`)
				.then((res) => {
					setAmountTranslated(res.data.translated);
				});
		}

		handleTranslateAmount();
	}, [numbers]);

	async function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setNewNumber(event.target.value);
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		if (Number(newNumber) < 0 || Number(newNumber) > 999999999999) {
			return toast.error('number need to be between 0 and 999999999999');
		}
		dispatch(add_number_translated_request(Number(newNumber)));
	}

	return (
		<main>
			<S.Container>
				<S.PageTitle>Number Translator</S.PageTitle>
				<S.Form onSubmit={handleSubmit}>
					<input
						type="number"
						placeholder="Type a number"
						value={newNumber}
						onChange={handleInputChange}
						required
					/>
					<button>
						<FiArrowRight color="#FFF" size={24} />
					</button>
				</S.Form>

				<S.List>
					<S.TextAmount>
						There's {amountTranslated.toLowerCase() || 'zero'} numbers
						translated
					</S.TextAmount>
					{numbers.map((item, index) => (
						<li key={index}>
							<S.TextNumber styled={item.translated === amountTranslated}>
								{item.translated.toLowerCase()}
							</S.TextNumber>
						</li>
					))}
				</S.List>
			</S.Container>
		</main>
	);
};

export default Translate;
