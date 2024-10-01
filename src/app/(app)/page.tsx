import { stripe } from "@/lib/stripe";
import { ProductSlider } from "@/components/products/product-slider";
import type Stripe from "stripe";

type Product = {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
};

export default async function Page() {
	const response = await stripe.products.list({
		expand: ["data.default_price"],
	});

	const products: Product[] = response.data.map((product) => {
		const price = product.default_price as Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: price.unit_amount ? price.unit_amount / 100 : 0,
		};
	});

	return <ProductSlider products={products} />;
}
