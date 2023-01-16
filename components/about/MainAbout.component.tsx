import { Avatar, Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../../config/constants";
import { useWidthWindow } from "hooks/useWidthWindow";
import { motion } from "framer-motion";
import Link from "components/commons/Link.component";

const devList = [
	// {
	// 	name: "Biden",
	// 	career: "CEO",
	// 	href: "https://t.me/",
	// 	src: "/avatarCeo.png",
	// },
	{
		name: "AntLert",
		career: "CMO",
		href: "https://t.me/AntLert",
		src: "/avatarCmo.png",
	},
	{
		name: "Albert Fowler",
		href: "https://t.me/fowlerdev",
		career: "DEV",
		src: "/avatarDev.png",
	},
	{
		name: "Gyo",
		href: "https://t.me/GyoArt",
		career: "Designer",
		src: "/avatarDesigner.jpg",
	},
];

const MainAbout = () => {
	const { width } = useWidthWindow();
	return (
		<Container>
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
				<Typography variant="h2" align="center" color="primary">
					ABOUT US
				</Typography>
			</motion.div>
			<Stack direction={width && width < 900 ? "column" : "row"} alignItems="center" justifyContent="center" sx={{ my: 5 }} spacing={5}>
				{devList.map((d, k) => (
					<motion.div
						key={d.name}
						initial={{
							opacity: 0,
							y: 50,
						}}
						transition={{ bounce: 0.65, type: "spring" }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								delay: k * 0.5,
								duration: 0.4,
								bounce: 0.65,
								type: "spring",
							},
						}}
						viewport={{ once: true, amount: 0.1 }}
						whileHover={{
							scale: 1.1,
						}}
					>
						<Link href={d.href} target="_blank">
							<Box
								sx={{
									width: 200,
									height: 210,
									borderRadius: 5,
									background: PRIMARY_COLOR,
								}}
							>
								<Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ padding: "10px 0" }}>
									<Avatar src={d.src} sx={{ width: 100, height: 100 }} alt="avatar" />
									<Typography sx={{ color: "#fff" }}>{d.name}</Typography>
									<Typography sx={{ color: "#fff" }}>{d.career}</Typography>
								</Stack>
							</Box>
						</Link>
					</motion.div>
				))}
			</Stack>
		</Container>
	);
};

export default MainAbout;
