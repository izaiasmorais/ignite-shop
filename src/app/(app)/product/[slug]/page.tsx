export default function Page({ params }: { params: { slug: string } }) {
	return (
		<div className="grid grid-cols-2 items-stretch gap-8 max-w-[1180px] mx-auto">
			<div
				className="w-full max-w-[576px] bg-linearion rounded-lg p-[.25rem] items-center
			justify-center h-[calc(656px-8.5rem)]"
			></div>

			<div className="flex flex-col">
				<h1 className="text-2xl text-gray-300">Camiseta Ignite Lab</h1>
				<span className="mt-4 block text-2xl text-green-300">R$ 79.90</span>

				<p className="mt-[2.5rem] text-md leading-4 text-gray-300">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
					voluptatibus fuga natus deleniti earum sequi accusamus nihil
					distinctio et veritatis possimus eligendi dolores dicta eum, ut quis
					soluta adipisci eos!
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
