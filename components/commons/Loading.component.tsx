import Lottie from "react-lottie";
import LoadingLottie from "lotties/loadinglotties.json";
import { motion } from "framer-motion";

const Loading = () => {
	return (
		<div>
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
