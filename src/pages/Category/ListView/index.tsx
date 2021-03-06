import React, { FC } from 'react';
import { MdFavoriteBorder, MdNavigateNext, MdStar, MdStarBorder } from 'react-icons/md';
import Button from '../../../components/Button';
import Grid from '../../../components/Grid';

import { Container, ProductBox, Image, ProductInfo, Star, Extra, ProductValue } from './styles';

const ListView: FC = () => {
  	return (
		<Container>
			{ [0, 1, 2, 3, 4, 5].map((_, index) => {
				return (
					<ProductBox key={ index }>
						<Image />

						<ProductInfo>
							<h3>Product Title</h3>
							<small>Space for a small product description</small>

							<Star>
								<MdStar size={ 20 } />
								<MdStar size={ 20 } />
								<MdStar size={ 20 } />
								<MdStar size={ 20 } />
								<MdStarBorder size={ 20 } />
							</Star>

							<Extra>
								<Grid gridTemplateColumns="1fr 1fr" gridGap={ 12 }>
									<span>Freshness</span>
									<span>New (Extra Fresh)</span>
									<span>Farm</span>
									<span>Grocery Tarm Fields</span>
									<span>Delivery</span>
									<span>Europe</span>
									<span>Stock</span>
									<span>320 pcs</span>
								</Grid>
							</Extra>
						</ProductInfo>

						<ProductValue flexDirection="column" justify="center">
							<h3>36.99 USD</h3>
							<span>48.56</span>
							
							<strong>Free Shipping</strong>
							<span>Delivery in 1 day</span>

							<Button>Product Detail <MdNavigateNext size={ 16 } color="#fff" /></Button>
							<Button><MdFavoriteBorder size={ 16 } /><strong>&nbsp;Add to wish list</strong></Button>
						</ProductValue>
					</ProductBox>	
				);
			})}
		</Container>
	);
}

export default ListView;