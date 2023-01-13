import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../../config/constants";
import { useWidthWindow } from "hooks/useWidthWindow";
import { motion } from "framer-motion";

const devList = [
	{
		name: "coint1",
		width: 100,
		height: 100,
		src: "/avatar.png",
	},
	{
		name: "coint2",
		width: 100,
		height: 100,
		src: "/avatar.png",
	},
	{
		name: "coint2",
		width: 100,
		height: 100,
		src: "/avatar.png",
	},
	{
		name: "coint",
		width: 100,
		height: 100,
		src: "/avatar.png",
	},
];

const MainParter = () => {
	const { width } = useWidthWindow();
	return (
		<Container>
			<motion.div
				initial={{
					opacity: 0,
					y: 500,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
			>
				<Typography variant="h2" align="center" color="primary">
					PARNER
				</Typography>
			</motion.div>
			<Stack
				direction={width && width < 600 ? "column" : "row"}
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
							y: 500,
						}}
						viewport={{ once: true }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								delay: k,
								duration: 0.5,
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
