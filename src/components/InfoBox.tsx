import { useStore } from '../store';

export const InfoBox = () => {
	const store = useStore((state) => state);

	return (
		<div className="infoBox">
			<h2>Another Component:</h2>
			<div className="row">
				<label>Message: </label>
				<span className="theValue">{store.message}</span>
			</div>
		</div>
	);
};
