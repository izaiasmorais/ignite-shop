import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ProductProps {
	srcImg: string | StaticImport;
}

export function Product({ srcImg }: ProductProps) {
	return (
		<a
			href=""
			className="group bg-linearion flex items-center justify-center p-[.5rem] relative
		cursor-pointer text-white overflow-hidden"
		>
			<Image
				src={srcImg}
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
				<strong className="text-lg">Camiseta X</strong>
				<span className="text-xl font-bold text-green-300">R$ 79,90</span>
			</footer>
		</a>
	);
}
