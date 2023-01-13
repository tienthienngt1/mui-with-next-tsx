import Lottie from "react-lottie";
import LoadingLottie from "lotties/loadinglotties.json";
import { motion } from "framer-motion";

const Loading = () => {
	return (
		<motion.div
			animate={{
				opacity: 1,
				transition: {
					duration: 0.5,
				},
			}}
			initial={{
				opacity: 0,
			}}
			style={{ width: "100vw", height: "100vh" }}
		>
			<Lottie
				options={{
					autoplay: true,
					loop: true,
					animationData: LoadingLottie,
				}}
			/>
		</motion.div>
	);
};

export default Loading;
