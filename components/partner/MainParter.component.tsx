import {
	Avatar,
	Box,
	Container,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { PRIMARY_COLOR } from "../../config/constants";
import { useWidthWindow } from "hooks/useWidthWindow";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

const devList = [
	{
		name: "coinmarketcap",
		width: 100,
		height: 100,
		src: "/coinmarketcap.jpg",
	},
	{
		name: "coingeco",
		width: 100,
		height: 100,
		src: "/coingeco.png",
	},
	{
		name: "dextool",
		width: 100,
		height: 100,
		src: "/dextool.png",
	},
	{
		name: "uniswap",
		width: 100,
		height: 100,
		src: "/uniswap.png",
	},
];

const WrapPartner = styled(Typography)({
	" @media (max-width: 600px)": {
		fontSize: "30px",
	},
});
const MainParter = () => {
	const { width } = useWidthWindow();
	return (
		<Container sx={{ my: 20 }}>
			<motion.div
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{ bounce: 0.65, type: "spring" }}
				viewport={{ once: true, amount: 0.1 }}
			>
				<WrapPartner variant="h2" align="center" color="primary">
					PARTNERS
				</WrapPartner>
			</motion.div>
			<Stack
				direction={{ xs: "column", md: "row" }}
				alignItems="center"
				justifyContent="center"
				sx={{ my: 5 }}
				spacing={5}
			>
				{devList.map((d, k) => (
					<motion.div
						key={d.name}
						initial={{
							opacity: 0,
							y: 50,
						}}
						transition={{ bounce: 0.65, type: "spring" }}
						viewport={{ once: true, amount: 0.1 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								delay: k * 0.3,
								duration: 0.5,
								type: "spring",
								bounce: 0.65,
							},
						}}
						whileHover={{
							scale: 1.1,
						}}
					>
						<Avatar
							src={d.src}
							sx={{ width: d.width, height: d.height }}
							alt="avatar"
						/>
					</motion.div>
				))}
			</Stack>
		</Container>
	);
};

export default MainParter;
