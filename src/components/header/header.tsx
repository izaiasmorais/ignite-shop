import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import Link from "next/link";

export function Header() {
	return (
		<header className="py-8 w-full max-w-[1100px] mx-auto">
			<Link href="/">
				<Image
					src={logoImg.src}
					width={136}
					height={40}
					alt="Logo Ignite Shop"
				/>
			</Link>
		</header>
	);
}
