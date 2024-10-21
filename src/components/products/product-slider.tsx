"use client";
import { useKeenSlider } from "keen-slider/react";
import { Product } from "@/components/products/product";
import type { ProductI } from "@/@types/product";

interface ProductSliderProps {
	products: ProductI[];
}

export function ProductSlider({ products }: ProductSliderProps) {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		},
	});

	return (
		<div
			ref={sliderRef}
			className="keen-slider flex w-full min-h-[656px] max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto"
		>
			{products.map((product) => {
				return <Product key={product.id} product={product} />;
			})}
		</div>
	);
}
