"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import defaultProfileImg from "../../../public/images/profile-img-default.png";

export default function ImageUpload({
	selectedFile,
	setSelectedFile,
	selectFileRef,
	onSelectImage,
}) {
	const selectedFileRef = useRef(null);

	return (
		<div className="flex flex-col items-center w-full">
			{selectedFile ? (
				<>
					<Image
						src={selectedFile}
						alt="User profile image"
						height={100}
						width={100}
					/>
				</>
			) : (
				<Image
					src={defaultProfileImg}
					alt="Default profile image provided by Quoted"
					height={100}
					width={100}
				/>
			)}
			<div>
				<input
					type="file"
					ref={selectedFileRef}
					onChange={onSelectImage}
					hidden
				/>
				<button onClick={() => selectedFileRef.current?.click()}>
					Edit Profile Image
				</button>
			</div>
		</div>
	);
}
