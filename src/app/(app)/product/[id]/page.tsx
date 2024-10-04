import { ProductContainer } from "@/components/products/product-container";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

export default async function Page({ params }: { params: { id: string } }) {
	const response = await stripe.products.retrieve(params.id, {
		expand: ["default_price"],
	});

	const price = response.default_price as Stripe.Price;

	const product = {
		id: response.id,
		name: response.name,
		imageUrl: response.images[0],
		price: price.unit_amount ? price.unit_amount / 100 : 0,
		description: response.description,
		defaultPriceId: price.id,
	};

	return <ProductContainer product={product} />;
}
