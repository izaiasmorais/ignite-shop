import { Product } from "@/components/products/product";
import camiseta1 from "../../assets/camisetas/1.png";
import camiseta2 from "../../assets/camisetas/2.png";
import camiseta3 from "../../assets/camisetas/3.png";

export default function Page() {
	return (
		<div className="flex w-full min-h-[656px] gap-12 max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto">
			<Product srcImg={camiseta1} />
			<Product srcImg={camiseta2} />
			<Product srcImg={camiseta3} />
		</div>
	);
}
