"use client";
import "../../app/globals.css";
import { useRef } from "react";
import Image from "next/image";
import defaultProfileImg from "../../../public/images/profile-img-default.png";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

export default function ImageUpload({
	selectedFile,
	setSelectedFile,
	selectFileRef,
	onSelectImage,
}) {
	const selectedFileRef = useRef(null);

	return (
		<>
			<div className="relative flex flex-col items-center w-full">
				{selectedFile ? (
					<>
						<Image
							src={selectedFile}
							alt="User profile image"
							height={150}
							width={150}
							className="user-image"
						/>
					</>
				) : (
					<Image
						src={defaultProfileImg}
						alt="Default profile image provided by Quoted"
						height={150}
						width={150}
						className="user-image"
					/>
				)}

				<input
					type="file"
					ref={selectedFileRef}
					onChange={onSelectImage}
					hidden
				/>
				<button
					className="absolute bottom-0 right-0 rounded-full p-2"
					onClick={() => selectedFileRef.current?.click()}
				>
					<AddPhotoAlternateOutlinedIcon fontSize="small" />
				</button>
			</div>
		</>
	);
}
