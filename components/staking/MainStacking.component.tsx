import {
	Avatar,
	Box,
	Button,
	Container,
	Grid,
	Stack,
	Typography,
	Snackbar,
	Alert,
} from "@mui/material";
import IconLottie from "components/commons/IconLottie.component";
import { PRIMARY_COLOR } from "config/constants";
import { useState } from "react";

type NotifyT = {
	open: boolean;
	handleClose: () => void;
};

const Notify = ({ open, handleClose }: NotifyT) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={5000}
			onClose={handleClose}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
		>
			<Alert severity="info" sx={{ width: "100%" }}>
				Comming Soon
			</Alert>
		</Snackbar>
	);
};

const MainStacking = () => {
	const [isShow, setShow] = useState(false);

	const handleConnect = () => setShow(true);
	const handleClose = () => setShow(false);
	return (
		<Container>
			<Typography align="center" variant="h2" color="primary">
				POOLS
			</Typography>
			<Grid container>
				<Grid xs={12} md={4}>
					<IconLottie />
				</Grid>
				<Grid xs={12} md={8}>
					<Stack alignItems="center" direction="column">
						<Box
							alignItems="center"
							sx={{
								width: 300,
								p: 4,
								my: 10,
								background: PRIMARY_COLOR,
								borderRadius: 5,
							}}
						>
							<Stack
								justifyContent="space-around"
								direction="row"
							>
								<Avatar
									src="/logo.png"
									alt="logo"
									sx={{ width: 80, height: 80 }}
								/>
								<Box sx={{ px: 1 }}>
									<Typography
										variant="h6"
										align="center"
										color="primary.light"
									>
										Robosu
									</Typography>
									<Typography
										variant="caption"
										align="center"
										color="primary.light"
									>
										No fee, No lock
									</Typography>
								</Box>
							</Stack>
							<Stack
								direction="row"
								justifyContent="space-between"
							>
								<Typography
									variant="body1"
									color="primary.light"
									gutterBottom
								>
									APR
								</Typography>
								<Typography
									variant="body1"
									color="primary.light"
									gutterBottom
								>
									100%
								</Typography>
							</Stack>
							<Stack
								direction="row"
								justifyContent="space-between"
							>
								<Typography
									variant="body1"
									color="primary.light"
									gutterBottom
								>
									Stake
								</Typography>
								<Typography
									variant="body1"
									color="primary.light"
									gutterBottom
								>
									Robosu Token
								</Typography>
							</Stack>
							<Stack
								direction="row"
								justifyContent="space-between"
							>
								<Typography
									variant="body1"
									color="primary.light"
									gutterBottom
								>
									Earn
								</Typography>
								<Typography
									gutterBottom
									variant="body1"
									color="primary.light"
								>
									Robosu Token
								</Typography>
							</Stack>
							<Stack
								direction="row"
								justifyContent="space-between"
							>
								<Typography
									variant="body1"
									color="secondary"
									gutterBottom
								>
									Robosu Token
								</Typography>
								<Typography
									gutterBottom
									variant="body1"
									color="secondary"
								>
									Available
								</Typography>
							</Stack>
							<Button
								color="secondary"
								variant="contained"
								sx={{ width: "100%", my: 2, borderRadius: 10 }}
								onClick={handleConnect}
							>
								Connect Wallet
							</Button>
						</Box>
					</Stack>
				</Grid>
			</Grid>
			<Notify open={isShow} handleClose={handleClose} />
		</Container>
	);
};

export default MainStacking;
