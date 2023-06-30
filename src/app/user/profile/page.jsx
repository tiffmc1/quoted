"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { UserData } from "@/src/app/firebase/context/AuthContext";
import { db, storage } from "@/src/app/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import ImageUpload from "@/src/components/User/ImageUpload";

export default function ProfilePage() {
	const { user } = UserData();
	const [selectedFile, setSelectedFile] = useState("");
	const selectFileRef = useRef(null);

	console.log("user", user);

	const uploadProfileImage = async () => {
		const userRef = doc(db, "users", user.id);
		console.log("user ref", userRef);

		try {
			if (selectedFile) {
				const imageRef = ref(storage, `users/${user.uid}/profile-image`);

				await uploadString(imageRef, selectedFile, "data_url");

				const downloadURL = await getDownloadURL(imageRef);

				await updateDoc(userRef, {
					profileImg: downloadURL,
				});

				console.log("HERE IS DOWNLOAD URL", downloadURL);
			}
		} catch (error) {
			console.log("upload image error", error);
		}
	};

	const onSelectImage = (event) => {
		const reader = new FileReader();

		if (event.target.files?.[0]) {
			reader.readAsDataURL(event.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			if (readerEvent.target?.result) {
				setSelectedFile(readerEvent.target.result);
			}
		};
	};

	return (
		<div>
			<div className="flex flex-col items-center justify-around">
				<div>
					<ImageUpload
						selectedFile={selectedFile}
						setSelectedFile={setSelectedFile}
						selectFileRef={selectFileRef}
						onSelectImage={onSelectImage}
					/>
					<button onClick={uploadProfileImage}>Confirm Change</button>
				</div>
				<div className="font-semibold text-2xl pt-6 pb-2">
					Account Information
				</div>
				<div className="text-lg">
					<div>Name: {user?.name}</div>
					<div>Email: {user?.email}</div>
				</div>
				<Link href="/user/quotes" className="font-semibold py-2">
					Your Quotes
				</Link>
			</div>
		</div>
	);
}
