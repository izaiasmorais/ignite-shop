import { stripe } from "@/lib/stripe";

export async function POST() {
	const priceId = "price_1Q3eSnRvmlBuDNZS0E3s7dwK";

	const succesUrl = `${process.env.NEXT_URL}/success`;
	const cancelUrl = `${process.env.NEXT_URL}/`;

	const checkoutSession = await stripe.checkout.sessions.create({
		success_url: succesUrl,
		cancel_url: cancelUrl,
		mode: "payment",
		line_items: [
			{
				price: priceId,
				quantity: 1,
			},
		],
	});

	return Response.json(
		{
			checkoutUrl: checkoutSession.url,
		},
		{
			status: 201,
		}
	);
}
