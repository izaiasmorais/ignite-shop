import logoImg from "../../assets/logo.svg";

export function Header() {
	return (
		<header className="py-8 w-full max-w-[1100px] mx-auto">
			<img src={logoImg.src} alt="Logo Ignite Shop" />
		</header>
	);
}
