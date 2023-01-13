import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { LINK_TOKEN, PRIMARY_COLOR } from "config/constants";
import SocialButton from "./SocialButton.component";
import ButtonCustom from "components/commons/ButtonCustom.component";
import Link from "components/commons/Link.component";

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
							animate={{
								y: [0, -30, 30, 0],
							}}
							transition={{
								ease: "linear",
								repeat: Infinity,
								duration: 10,
								delay: 2,
							}}
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
								y: 0,
								transition: {
									delay: 2,
									duration: 1,
								},
							}}
							initial={{ y: 500, opacity: 0 }}
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
								<Link href={LINK_TOKEN} target="_blank">
									<ButtonCustom
										//@ts-ignore
										sx={{ fontSize: "30px" }}
										title="Buy Now"
									/>
								</Link>
							</Typography>
							<SocialButton />
						</motion.div>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Main;
