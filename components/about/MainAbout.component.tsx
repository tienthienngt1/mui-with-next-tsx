import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../../config/constants";
import { useWidthWindow } from "hooks/useWidthWindow";
import { motion } from "framer-motion";

const devList = [
	{
		name: "Biden",
		career: "Ceo",
		desc: "abcdef",
		src: "/avatar.png",
	},
	{
		name: "CZ",
		career: "Ceo",
		desc: "abcdef",
		src: "/avatar.png",
	},
	{
		name: "Elon Musk",
		career: "Ceo",
		desc: "abcdef",
		src: "/avatar.png",
	},
];

const MainAbout = () => {
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
					ABOUT US
				</Typography>
			</motion.div>
			<Stack
				direction={width && width < 900 ? "column" : "row"}
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
						<Box
							sx={{
								width: 200,
								height: 280,
								borderRadius: 5,
								background: PRIMARY_COLOR,
							}}
						>
							<Stack
								direction="column"
								justifyContent="center"
								alignItems="center"
								spacing={2}
								sx={{ padding: "10px 0" }}
							>
								<Avatar
									src={d.src}
									sx={{ width: 100, height: 100 }}
									alt="avatar"
								/>
								<Typography>{d.name}</Typography>
								<Typography>{d.career}</Typography>
								<Typography>{d.desc}</Typography>
							</Stack>
						</Box>
					</motion.div>
				))}
			</Stack>
		</Container>
	);
};

export default MainAbout;
