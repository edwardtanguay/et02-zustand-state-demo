import { useStore } from '../store';
import { ImSpinner10 } from 'react-icons/im';

export const InfoBox = () => {
	const store = useStore((state) => state);

	return (
		<div className="infoBox">
			<h2>Another Component:</h2>
			<div className="row">
				<label>Message: </label>
				<span className="theValue">{store.message}</span>
			</div>
			<div className="row">
				<label>Colors: </label>
				<span className="theValue">
					{store.colors.map((color) => color).join(', ')}
				</span>
			</div>
			<div className="row">
				<label>User is online: </label>
				<span className="theValue">
					{store.currentUserStatus.isOnline ? 'yes' : 'no'}
				</span>
			</div>
			<div className="row">
				<label>User's email is confirmed: </label>
				<span className="theValue">
					{store.currentUserStatus.emailIsConfirmed ? 'yes' : 'no'}
				</span>
			</div>
			<div className="row">
				<label>Tech Books:</label>
				{store.techBooksAreLoading && (
					<div>
						<ImSpinner10 className="spinner" />
					</div>
				)}
				<ul>
					{store.techBooks.map((techBook, i) => {
						return (
							<>
								{techBook.title
									.toLowerCase()
									.includes(
										store.techBooksSearchText.toLowerCase()
									) && <li key={i}>{techBook.title}</li>}
							</>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
