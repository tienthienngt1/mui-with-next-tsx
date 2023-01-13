import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { PRIMARY_COLOR } from "config/constants";
import SocialButton from "./SocialButton.component";
import ButtonCustom from "components/commons/ButtonCustom.component";

const variants = {
	inimage: {
		opacity: 1,
		y: [0, -50, 50, 0],
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
};

const Main = () => {
	return (
		<>
			<Grid container alignItems="center">
				<Grid xs={12} md={5}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 20,
						}}
					>
						<motion.div
							key="main-image-home"
							variants={variants}
							animate={{ y: [0, -20, 20, 0] }}
							transition={{
								ease: "linear",
								repeat: Infinity,
								duration: 10,
							}}
							initial="inimage"
						>
							<Image
								src="/robosu.png"
								alt="robosu"
								width={250}
								height={250}
							/>
						</motion.div>
					</Box>
				</Grid>
				<Grid xs={12} md={7} sx={{ height: "100%" }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<motion.div
							key="main-home-text"
							animate={{
								opacity: 1,
								x: 0,
								transition: { duration: 1 },
							}}
							initial={{ x: 100 }}
						>
							<Typography
								variant="h3"
								gutterBottom
								align="center"
								sx={{ color: "#fff" }}
							>
								<span style={{ color: PRIMARY_COLOR }}>
									ROBOSU
								</span>{" "}
								TOKEN TO THE MOON
							</Typography>
							<Typography
								variant="h5"
								sx={{ color: "rgb(255,255,255,0.8)" }}
								gutterBottom
								align="center"
							>
								Do You Like Cats? Do You Like Crypto? If You
								Said Yes To Either Of Those Then This Is The
								Purr-Fect Coin For You
							</Typography>
							<Typography variant="h2" align="center">
								<ButtonCustom
									//@ts-ignore
									sx={{ fontSize: "30px" }}
									title="Buy Now"
								/>
							</Typography>
						</motion.div>
						<SocialButton />
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Main;
