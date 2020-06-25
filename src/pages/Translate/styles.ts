import styled from 'styled-components';

interface StyledNumbers {
	readonly styled: Boolean;
}

export const MainWrapper = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PageTitle = styled.h1`
	padding: 20px;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 48rem;
	top: 50%;
	margin: -16.5rem auto 20px;
	background-color: #fff;
	border-radius: 0.5rem;
	padding-bottom: 30px;
	left: 0;
	right: 0;
	z-index: 2;
	position: absolute;

	h1 {
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: #81259d;
	}
`;

export const Form = styled.form`
	padding: 0 25px 20px;
	display: flex;
	flex-direction: row;

	input {
		height: 40px;
		width: 90%;
		font-size: 15px;
		border-radius: 6px;
		border: 1px solid #eee;
		margin-right: 10px;
		padding: 0 15px;
		color: #666;
	}

	button {
		border: 0;
		width: 40px;
		height: 40px;
		border-radius: 4px;
		background-color: #81259d;
		cursor: pointer;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
	}

	button:hover {
		background-color: #81259d;
		transition: 0.2s ease-in;
	}
`;

export const TextAmount = styled.h3`
	padding-left: 10px;
	clear: both;
	text-weight: bold;
	padding-top: 0;
`;

export const List = styled.ul`
	list-style: none;
	padding: 20px;

	li {
		margin-top: 10px;
	}

	li {
		padding-left: 10px;
		clear: both;
	}
`;

export const TextNumber = styled.span<StyledNumbers>`
	line-height: 2em;
	color: ${(props) => props.styled && '#81259d;'};
`;
