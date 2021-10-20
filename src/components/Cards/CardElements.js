import styled from 'styled-components';

export const Columns = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		flex-direction: row;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ bg }) => bg};
	padding: 3.25em;
	gap: 2em;
	width: 22em;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		padding: 4em;
	}
`;

export const CardIcon = styled.img`
	display: block;
	width: 4.25em;
`;

export const CardTitle = styled.h1`
	font-size: 2.75em;
	font-family: 'Big Shoulders Display', cursive;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.veryLightGray};
`;

export const CardBody = styled.p`
	line-height: 1.75em;
	color: ${({ theme }) => theme.colors.transparentWhite};
`;

export const CardButton = styled.button`
	display: block;
	padding: 1em;
	background-color: ${({ theme }) => theme.colors.veryLightGray};
	border-color: transparent;
	border-radius: 50px;
	color: ${({ bg }) => bg};
	font-weight: 700;
	font-size: 1em;

	&:hover {
		background-color: transparent;
		cursor: pointer;
		color: ${({ theme }) => theme.colors.veryLightGray};
		border: 0.2em solid
			${({ theme }) => theme.colors.veryLightGray};
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		margin-top: 4em;
	} ;
`;
