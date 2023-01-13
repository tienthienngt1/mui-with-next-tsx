import Lottie from "react-lottie";
import LoadingLottie from "lotties/loadinglotties.json";

const Loading = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Lottie
				options={{
					autoplay: true,
					loop: true,
					animationData: LoadingLottie,
				}}
			/>
		</div>
	);
};

export default Loading;
