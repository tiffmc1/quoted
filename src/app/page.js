import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import logo from "../../public/images/full_logo_transparent_no_buffer.png";

export default function Home() {
	return (
		<>
			<div className="h-screen flex flex-col items-center justify-center">
				<div className="w-[75%] basis-1/2 flex items-center justify-center">
					<Image src={logo} alt="Quoted Logo" height={300} width={300} />
				</div>

				<div className="basis-1/2 flex flex-col">
					<button>
						<Link href="/login">Login</Link>
					</button>

					<button>
						<Link href="/signup" className="">
							Sign Up
						</Link>
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}
