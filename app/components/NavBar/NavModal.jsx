"use client";
import { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signout from "../../firebase/auth/signout";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavModal() {
	const [open, setOpen] = useState(false);
	// const router = useRouter();

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();

	// 	const { result, error } = await signout();

	// 	if (error) {
	// 		console.log(error);
	// 	}

	// 	console.log("Sign Out Successful", result);
	// 	return router.push("/");
	// };

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Nav
			</Button>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<List>
					<ListItem button>
						<Link href="/main/profile">
							<ListItemText primary="Profile" />
						</Link>
					</ListItem>
					<Divider />
					<ListItem button>
						<Link href="/main/quotes">
							<ListItemText primary="Your Quotes" />
						</Link>
					</ListItem>

					<Divider />
					<ListItem button>
						<ListItemText primary="Sign Out" />
						{/* <form>
				<button type="submit" onSubmit={handleSubmit}>
					Logout
				</button>
			</form> */}
					</ListItem>
				</List>
			</Dialog>
		</div>
	);
}
