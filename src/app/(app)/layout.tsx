import { Header } from "../../components/header/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="bg-gray-900 max-w-[100vw] flex flex-col h-screen">
			<Header />

			<div className="p-4 flex-grow overflow-auto">{children}</div>
		</main>
	);
}
