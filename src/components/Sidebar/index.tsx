import React, { FC } from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { FiStar } from 'react-icons/fi';

import { Container, Wrapper, Title, Categories, CategoryWrapper, CategoryName, Quantity, Brands, Rating, Price, MinMax, Finish } from './styles';

const Sidebar: FC = () => {
	function Stars(stars: number): JSX.Element[] {
		let starItems: JSX.Element[] = [];

		for (let i = 0; i < 5; i++) {
			starItems.push((i < stars) ? <MdStar size={ 18 } color="#fdbc15" /> : <MdStarBorder size={ 18 } />);
		}

		return starItems;
	}

	return (
		<Container>
			<Categories>
				<Title>Categories</Title>

				<CategoryWrapper>
					<CategoryName>Category name</CategoryName>
					<Quantity>320</Quantity>
				</CategoryWrapper>

				<CategoryWrapper>
					<CategoryName>Category name</CategoryName>
					<Quantity>112</Quantity>
				</CategoryWrapper>

				<CategoryWrapper>
					<CategoryName>Category name</CategoryName>
					<Quantity>32</Quantity>
				</CategoryWrapper>

				<CategoryWrapper>
					<CategoryName>Category name</CategoryName>
					<Quantity>42</Quantity>
				</CategoryWrapper>
			</Categories>

			<Brands>
				<Title>Brands</Title>
				
				<Wrapper>
					<input type="checkbox"/>
					<span>Filtre by brand item</span>				
				</Wrapper>

				<Wrapper>
					<input type="checkbox" checked />
					<span>Filtre by brand item</span>				
				</Wrapper>

				<Wrapper>
					<input type="checkbox" checked />
					<span>Filtre by brand item</span>				
				</Wrapper>

				<Wrapper>
					<input type="checkbox"/>
					<span>Filtre by brand item</span>				
				</Wrapper>

				<Wrapper>
					<input type="checkbox"/>
					<span>Filtre by brand item</span>				
				</Wrapper>				
			</Brands>

			<Rating>
				<Title>Rating</Title>

				{ [5, 4, 3, 2, 1].map(rate => {
					return(
						<Wrapper>
							<input type="checkbox"/>
							{ Stars(rate) }
						</Wrapper>
					);				
				})}
			</Rating>

			<Price>
				<Title>Prices</Title>

				<Wrapper><input type="range" name="" id="" min="0" max="1000" /></Wrapper>

				<MinMax>
					<div>
						<span>Min</span>
						<input type="text" placeholder="0" />
					</div>

					<div>
						<span>Max</span>
						<input type="text" placeholder="1000" />
					</div>
				</MinMax>

				<Finish>
					<button>Apply</button>
					<button>Reset</button>
				</Finish>
			</Price>
		</Container>
	);
}

export default Sidebar;