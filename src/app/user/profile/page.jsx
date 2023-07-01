"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { UserData } from "@/src/app/firebase/context/AuthContext";
import { db, storage } from "@/src/app/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import ImageUpload from "@/src/components/User/ImageUpload";
import Profile from "@/src/components/User/Profile";
import EditProfile from "@/src/components/User/EditProfile";
import EditIcon from "@mui/icons-material/Edit";

export default function ProfilePage() {
	const { user } = UserData();
	const [selectedFile, setSelectedFile] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [uploadComplete, setUploadComplete] = useState(true);
	const [openProfileEdit, setOpenProfileEdit] = useState(false);
	const selectFileRef = useRef(null);

	useEffect(() => {
		if (user && user.profileImg) {
			setSelectedFile(user.profileImg);
		}
	}, [user]);

	const uploadProfileImage = async () => {
		setIsLoading(true);
		const userRef = doc(db, "users", user.id);

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

		setIsLoading(false);
		setUploadComplete(true);
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

		setUploadComplete(false);
	};

	const handleProfileOpen = () => {
		!openProfileEdit ? setOpenProfileEdit(true) : setOpenProfileEdit(false);
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
						uploadProfileImage={uploadProfileImage}
					/>
					{!uploadComplete && (
						<button onClick={uploadProfileImage}>Confirm Change</button>
					)}
					{isLoading && <div className="text-center">Uploading...</div>}
				</div>
				<div className="font-semibold text-2xl pt-6 pb-2">
					Account Information
				</div>
				<div className="w-[75%] flex flex-col items-center justify-between border border-red-500 text-xl py-2">
					{openProfileEdit ? (
						<EditProfile user={user} setOpenProfileEdit={setOpenProfileEdit} />
					) : (
						<>
							<Profile user={user} />
							<button className="rounded-full p-2" onClick={handleProfileOpen}>
								<EditIcon fontSize="small" />
							</button>
						</>
					)}
				</div>

				<Link href="/user/quotes" className="font-semibold py-2">
					Your Quotes
				</Link>
			</div>
		</div>
	);
}
