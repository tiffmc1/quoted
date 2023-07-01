export default function Profile({ user }) {
	return (
		<div>
			<div>Name: {user?.name}</div>
			<div>Email: {user?.email}</div>
		</div>
	);
}
