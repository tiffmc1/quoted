"use client";
import NavModal from "./NavModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function Nav() {
	const path = usePathname();
	const ref = "/user";

	return (
		<div>
			{path === ref ? (
				<div className="flex flex-row justify-end p-4">
					<NavModal />
				</div>
			) : (
				<div className="flex flex-row justify-between p-4">
					<Link href="/user/main-feed">
						<CottageOutlinedIcon />
					</Link>
					<div className="absolute left-[50%] translate-x-[-50%]">
						<Link href="/user/quotes/create">
							<AddCircleOutlineOutlinedIcon />
						</Link>
					</div>
					<NavModal />
				</div>
			)}
		</div>
	);
}
