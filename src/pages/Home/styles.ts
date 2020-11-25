import styled, { css } from 'styled-components';
import Flex from '../../components/Flex';

import background from '../../assets/background-banner.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

	h3 {
		font-size: 18px;
		font-weight: 600;
	}
`;

const basicDiv = css`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;

	height: 280px;

	h3 {
		margin-bottom: 16px;
	}

	a {
		color: #6a983c;
	}

	a + a {
		margin-top: 12px;
	}

	button {
		margin-top: 48px;
	}
`;

export const Basics = styled.div`
	${basicDiv};
`;

export const Banners = styled(Flex)`
	height: 280px;
	width: 38%;

	div:nth-child(1) {
		margin: 48px 33px;
	}

	button {
		margin: 48px 0 32px 32px;
	}

	background: #f4f8ec;
	border-radius: 12px;	
	background-image: url(${background});
	background-size: cover;
`;

export const BestSellings = styled(Flex)`
	${basicDiv};
	margin: 64px 0;
`;

export const MoreProducts = styled.div`
	${basicDiv};
	margin: 64px 0;
`;

export const Quotes = styled.div`
	display: flex;
	flex-direction: column;

	margin: 64px 0;

	h2 {
		margin-bottom: 32px;
	}
`;

export const Carousel = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Client = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	margin-bottom: 10px;
`;

export const QuotesBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	height: 250px;
	width: 32%;

	background: #ffffff;
	border: 1px solid #f1f1f1;
	box-sizing: border-box;
	border-radius: 12px;	

	span {
		font-size: 15px;
		font-weight: 500;
		text-align: center;

		padding: 24px 32px;
	}
`;

export const Headline = styled.div`

`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;

	height: 323px;
	padding: 16px;

	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;

	span {
		font-size: 12px;
		font-weight: 400;
		color: #575757;
	}
`;

export const Image = styled.div`
	height: 180px;
	background: #f9f9f9;
	border-radius: 12px;
`;

export const Title = styled.h2`
	margin-top: 16px;
	margin-bottom: 0;
	font-size: 15px;
	font-weight: 500;
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-top: 16px;

	h3 {
		margin: 0;
	}

	button {
		margin: 0;
	}
`;


export const Price = styled.h3`
	font-size: 18px;
	font-weight: 600;
`;