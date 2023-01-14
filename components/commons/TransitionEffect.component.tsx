import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
	in: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.2,
		},
	},
	out: {
		opacity: 0,
		y: 100,
		transition: {
			duration: 0.5,
		},
	},
};
type Props = {
	children: ReactNode;
};
const TransitionEffect = ({ children }: Props) => {
	const { asPath } = useRouter();

	return (
		<div className="effect-3">
			<AnimatePresence initial={true} mode="wait">
				<motion.div
					key={asPath}
					variants={variants}
					animate="in"
					initial="out"
					exit="out"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default TransitionEffect;
