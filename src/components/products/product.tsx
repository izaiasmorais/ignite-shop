import type { ProductProps } from "@/@types/product";
import Image from "next/image";

interface ProductCardProps {
	product: ProductProps;
}

export function Product({ product }: ProductCardProps) {
	return (
		<a
			href=""
			className="keen-slider__slide group bg-linearion flex items-center justify-center p-[.5rem]
			relative cursor-pointer text-white overflow-hidden"
		>
			<Image
				src={product.imageUrl}
				alt="Camiseta X"
				width={520}
				height={480}
				className="object-cover"
			/>

			<footer
				className="absolute bottom-[.25rem] left-[.25rem] right-[.25rem]
			rounded-md flex items-center justify-between bg-[rgba(0,0,0,.6)] p-8
			translate-y-full opacity-0 transition-all duration-300 ease-in-out
			group-hover:translate-y-0 group-hover:opacity-100"
			>
				<strong className="text-lg">{product.name}</strong>
				<span className="text-xl font-bold text-green-300">
					R$ {product.price}
				</span>
			</footer>
		</a>
	);
}
