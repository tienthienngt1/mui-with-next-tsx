import Lottie from "react-lottie";
import LottieFile from "lotties/robotlotties.json";

const IconLottie = () => {
	return (
		<>
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData: LottieFile,
				}}
				height={300}
				width={300}
			/>
		</>
	);
};

export default IconLottie;
