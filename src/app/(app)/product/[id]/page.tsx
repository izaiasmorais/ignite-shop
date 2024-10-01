import { stripe } from "@/lib/stripe";
import Image from "next/image";
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
	};

	return (
		<div className="grid grid-cols-2 items-stretch gap-12 max-w-[1180px] mx-auto">
			<div
				className="w-full max-w-[576px] bg-linearion rounded-lg p-[.25rem] items-center
			justify-center h-[calc(656px-8.5rem)]"
			>
				<Image
					src={product.imageUrl}
					width={520}
					height={480}
					alt="Camiseta X"
				/>
			</div>

			<div className="flex flex-col">
				<h1 className="text-2xl text-gray-300">{product.name}</h1>
				<span className="mt-4 block text-2xl text-green-300">
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(product.price)}
				</span>

				<p className="mt-[2.5rem] text-md leading-4 text-gray-300">
					{product.description}
				</p>

				<button
					className="mt-auto bg-green-500 border-none text-white rounded-lg p-[1.25rem]
				cursor-pointer font-bold text-lg hover:bg-green-300 transition-colors duration-300"
				>
					Comprar agora
				</button>
			</div>
		</div>
	);
}
