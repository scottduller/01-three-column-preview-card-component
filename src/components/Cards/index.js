import React from 'react';
import {
	Card,
	CardBody,
	CardButton,
	CardIcon,
	CardTitle,
	Columns,
} from './CardElements';

import { theme } from '../shared/theme';

import iconSuvs from '../images/icon-suvs.svg';
import iconLuxury from '../images/icon-luxury.svg';
import iconSudans from '../images/icon-sedans.svg';

const index = () => {
	return (
		<Columns>
			<Card bg={theme.colors.brightOrange}>
				<CardIcon src={iconSudans} />
				<CardTitle>SEDANS</CardTitle>
				<CardBody>
					Choose a sedan for its affordability and excellent
					fuel economy. Ideal for cruising in the city or on
					your next road trip.
				</CardBody>
				<CardButton bg={theme.colors.brightOrange}>
					Learn More
				</CardButton>
			</Card>
			<Card bg={theme.colors.darkCyan}>
				<CardIcon src={iconSuvs} />
				<CardTitle>SUVS</CardTitle>
				<CardBody>
					Take an SUV for its spacious interior, power, and
					versatility. Perfect for your next family vacation
					and off-road adventures.
				</CardBody>
				<CardButton bg={theme.colors.darkCyan}>
					Learn More
				</CardButton>
			</Card>
			<Card bg={theme.colors.veryDarkCyan}>
				<CardIcon src={iconLuxury} />
				<CardTitle>LUXURY</CardTitle>
				<CardBody>
					Cruise in the best car brands without the bloated
					prices. Enjoy the enhanced comfort of a luxury
					rental and arrive in style.
				</CardBody>
				<CardButton bg={theme.colors.veryDarkCyan}>
					Learn More
				</CardButton>
			</Card>
		</Columns>
	);
};

export default index;
