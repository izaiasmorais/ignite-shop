export default function Page({ params }: { params: { slug: string } }) {
	return (
		<div>
			<h1 className="text-3xl font-bold">Página do Produto</h1>
			<span>My Product: {params.slug}</span>
		</div>
	);
}
