import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { BUY_TAX, LINK_TOKEN, PRIMARY_COLOR, SELL_TAX } from "config/constants";
import SocialButton from "./SocialButton.component";
import ButtonCustom from "components/commons/ButtonCustom.component";
import Link from "components/commons/Link.component";
import { Stack } from "@mui/material";

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
								rotate: [0, -10, 10, 0],
							}}
							transition={{
								ease: "linear",
								repeat: Infinity,
								duration: 10,
								delay: 2,
							}}
						>
							<Image src="/robosu.png" alt="robosu" width={250} height={250} />
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
									delay: 1.5,
									duration: 1,
								},
							}}
							initial={{ y: 500, opacity: 0 }}
						>
							<Box sx={{ p: 2 }}>
								<Typography variant="h3" gutterBottom align="center" sx={{ color: "#fff" }}>
									<span style={{ color: PRIMARY_COLOR }}>$ROBOSU</span> TOKEN TO THE MOON
								</Typography>
								<Typography variant="h6" sx={{ color: "rgb(255,255,255,0.8)", p: 1 }} gutterBottom align="justify">
									A highly advanced piece of technology that has been designed to mimic the movements and behaviors of a real dog. This robot are equipped with sensors, advanced
									programming, and AI capabilities that allow them to learn, adapt, and interact with their environment in a lifelike manner. They can be used for a variety of
									purposes.
								</Typography>
								<Typography align="center" color="secondary" variant="h6" sx={{ marginTop: 2 }}>
									Buy Tax: {BUY_TAX} | Sell Tax: {SELL_TAX}
								</Typography>
							</Box>
							<Stack justifyContent="center" alignItems="center" spacing={2} direction={{ xs: "column", md: "row" }} sx={{ marginTop: 1 }}>
								<Link href={LINK_TOKEN} target="_blank">
									<ButtonCustom
										//@ts-ignore
										sx={{
											fontSize: "30px",
										}}
										title="Buy Now"
									/>
								</Link>
								<Link href="/stacking">
									<ButtonCustom
										//@ts-ignore
										sx={{
											fontSize: "30px",
										}}
										title="Stake Now"
									/>
								</Link>
							</Stack>
							<SocialButton />
						</motion.div>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Main;
