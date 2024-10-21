export interface ProductI {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
}

export interface ProductProps {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
	description: string | null;
	defaultPriceId: string;
}
