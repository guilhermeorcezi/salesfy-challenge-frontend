import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 36rem;
	top: 50%;
	margin: -16.5rem auto 0;
	background-color: #fff;
	border-radius: 0.5rem;
	padding-bottom: 30px;
	left: 0;
	right: 0;
	z-index: 2;
	position: absolute;
`;

export const Form = styled.form`
	padding: 20px 25px;
	display: flex;
	flex-direction: row;
	img {
		max-width: 40px;
		margin-right: 20px;
	}
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

export const List = styled.ul`
	list-style: none;
	padding: 20px;

	li,
	h3 {
		padding-left: 10px;
		clear: both;
	}

	h3 {
		text-weight: bold;
        padding-top: 0;
        margin-bottom:10px;
	}
`;

export const Name = styled.a`
	font-size: 32px;
	flex-direction: column;
	margin-bottom: 10px;
	font-weight: bold;
	text-decoration: none;
	color: #81259d;
`;
