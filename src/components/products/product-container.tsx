"use client";
import type { ProductProps } from "@/@types/product";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

interface ProductContainerProps {
	product: ProductProps;
}

export function ProductContainer({ product }: ProductContainerProps) {
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
		useState(false);

	async function handleBuyProduct() {
		try {
			setIsCreatingCheckoutSession(true);
			const response = await axios.post("/api/checkout", {
				priceId: product.defaultPriceId,
			});

			const { checkoutUrl } = response.data;

			window.location.href = checkoutUrl;
		} catch (error) {
			setIsCreatingCheckoutSession(false);
			console.log(error);
		}
	}

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
					onClick={() => handleBuyProduct()}
					disabled={isCreatingCheckoutSession}
					className="mt-auto bg-green-500 border-none text-white rounded-lg p-[1.25rem]
				cursor-pointer font-bold text-lg hover:bg-green-300 transition-colors duration-300
				disabled:cursor-progress disabled:opacity-80 flex items-center gap-2 justify-center"
				>
					{isCreatingCheckoutSession && (
						<LoaderCircle className="animate-spin" />
					)}
					Comprar agora
				</button>
			</div>
		</div>
	);
}
