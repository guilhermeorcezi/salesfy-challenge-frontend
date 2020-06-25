import React from 'react';
import * as S from './styles';

import { FaSearch } from 'react-icons/fa';

const Translate: React.FC = () => {
	async function handleSubmit() {}

	return (
		<main>
			<S.Container>
				<S.Form onSubmit={handleSubmit}>
					<input type="text" placeholder="Type a number" required />
					<button>
						<FaSearch color="#FFF" size={14} />
					</button>
				</S.Form>

				<S.List>
						<h3>value</h3>
					<li>
						<a>number</a>
					</li>
				</S.List>
			</S.Container>
		</main>
	);
};

export default Translate;
