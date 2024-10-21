import Link from "next/link";

export default function Page() {
	return (
		<div className="text-white flex flex-col items-center justify-center m-auto h-[656px]">
			<h1>Compre Efetuada</h1>

			<img
				src=""
				alt=""
				className="w-full max-w-[130px] h-[145px] bg-linearion rounded-none p-0.25 flex items-center justify-center"
			/>

			<p>
				Uhunn <strong>Izaías Lima</strong>, sua{" "}
				<strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
				casa
			</p>

			<Link href="">Voltar ao catálogo</Link>
		</div>
	);
}
