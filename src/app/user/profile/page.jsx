"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { UserData } from "@/src/app/firebase/context/AuthContext";
import { auth, db, storage } from "@/src/app/firebase/config";
import {
	onSnapshot,
	collection,
	query,
	where,
	addDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import ImageUpload from "@/src/components/User/ImageUpload";

export default function ProfilePage() {
	const { user } = UserData();
	const [selectedFile, setSelectedFile] = useState("");
	const selectFileRef = useRef(null);

	console.log("profile page", user);

	const uploadProfileImage = async () => {
		const userColRef = collection(db, "users");
		const userQuery = query(userColRef, where("uid", "==", user.uid));

		const userRef = await addDoc(userColRef, userQuery);

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
			<div className="flex flex-col items-center py-2">
				<div>
					<ImageUpload
						selectedFile={selectedFile}
						setSelectedFile={setSelectedFile}
						selectFileRef={selectFileRef}
						onSelectImage={onSelectImage}
					/>
				</div>
				<div>Account Information</div>
				<div>Name: {user?.name}</div>
				<div>Email: {user?.email}</div>
				<Link href="/user/quotes">Your Quotes</Link>
			</div>
		</div>
	);
}
