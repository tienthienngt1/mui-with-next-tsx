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
import { connectWeb3, getBalance } from "core/connectWeb3";
import { useState, useEffect } from "react";
declare var window: any;

type NotifyT = {
	open: boolean;
	handleClose: () => void;
};

const Notify = ({ open, handleClose }: NotifyT) => {
	return (
		<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
			<Alert severity="info" sx={{ width: "100%" }}>
				Comming Soon
			</Alert>
		</Snackbar>
	);
};

const MainStacking = () => {
	const [isShow, setShow] = useState(false);
	const [address, setAddress] = useState<string>();
	const [balance, setBalance] = useState<string>();
	const handleConnect = async () => {
		const res = await connectWeb3();
		if (address !== res?.account) {
			setAddress(res?.account);
			setBalance(res?.balance);
		}
	};
	const handleClose = () => setShow(false);

	useEffect(() => {
		try {
			if (window.ethereum) {
				window.ethereum.on(
					"accountsChanged",
					async (account: string[]) => {
						if (address === account[0]) return;
						if (!account[0]) {
							setAddress("");
							setBalance("");
							return;
						}
						if (window.ethereum.chainId !== "0x1") {
							await window.ethereum.request({
								method: "wallet_switchEthereumChain",
								params: [{ chainId: "0x1" }],
							});
						}
						setAddress(account[0]);
						account[0] &&
							getBalance(account[0]).then((bal) =>
								setBalance(bal)
							);
					}
				);
				window.ethereum.on("disconnect", () => {
					setAddress("");
					setBalance("");
				});
			}
		} catch (error) {
			console.log(error);
		}
		return () => {
			window.ethereum.removeListener("accountsChanged", () => {});
		};
	}, []);

	return (
		<>
			<Stack direction="row" justifyContent="flex-end"></Stack>
			<Container sx={{ marginTop: 3 }}>
				<Typography align="center" variant="h2" color="primary">
					POOLS
				</Typography>
				<Grid container>
					<Grid item xs={12} md={4}>
						<IconLottie />
					</Grid>
					<Grid item xs={12} md={8}>
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
								{address && (
									<Typography
										gutterBottom
										align="center"
										color="secondary"
									>
										{`${address.slice(
											0,
											5
										)}...${address.slice(-4)}
                                        `}
									</Typography>
								)}
								<Stack
									justifyContent="space-around"
									direction="row"
								>
									<Avatar
										src="/robosustake.png"
										alt="logo"
										sx={{ width: 80, height: 80 }}
									/>
									<Box
										sx={{
											width: "100%",
										}}
									>
										<Typography
											variant="h6"
											align="center"
											color="primary.light"
										>
											Robosu Inu
										</Typography>
										<Typography
											variant="subtitle2"
											align="center"
											color="primary.light"
										>
											No fee, No lock
										</Typography>
									</Box>
								</Stack>
								<Stack
									sx={{ paddingTop: 2 }}
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
										200%
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
										Robosu Inu
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
										Robosu Inu
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
										Robosu Inu
									</Typography>
									<Typography
										gutterBottom
										variant="body1"
										color="secondary"
									>
										Available
									</Typography>
								</Stack>

								{!address ? (
									<Button
										color="secondary"
										variant="contained"
										sx={{
											width: "100%",
											my: 2,
											borderRadius: 10,
										}}
										onClick={handleConnect}
									>
										Connect Wallet
									</Button>
								) : (
									<>
										<Stack
											direction="row"
											justifyContent="flex-start"
										>
											<Typography
												variant="body1"
												color="secondary"
												gutterBottom
											>
												$RSI
											</Typography>
											<Typography
												variant="body1"
												color="primary.light"
												gutterBottom
												sx={{ marginLeft: 1 }}
											>
												EARNED
											</Typography>
										</Stack>
										<Stack
											direction="row"
											justifyContent="space-between"
											alignItems="center"
										>
											<Typography
												variant="body1"
												color="secondary"
												gutterBottom
											>
												0
											</Typography>
											<Button
												disabled
												color="secondary"
												variant="contained"
												sx={{
													borderRadius: 10,
												}}
											>
												Harvest
											</Button>
										</Stack>
										<Stack
											direction="row"
											justifyContent="flex-start"
											alignItems="center"
										>
											<Typography
												variant="body1"
												color="secondary"
												gutterBottom
											>
												$RSI
											</Typography>
											<Typography
												variant="body1"
												color="primary.light"
												gutterBottom
												sx={{ marginLeft: 1 }}
											>
												STAKED
											</Typography>
										</Stack>
										<Stack
											direction="row"
											justifyContent="space-between"
											alignItems="center"
										>
											<Typography
												variant="body1"
												color="secondary"
												gutterBottom
											>
												Avalable
											</Typography>
											<Typography
												variant="body1"
												color="primary.light"
												gutterBottom
												sx={{ marginLeft: 1 }}
											>
												{balance ?? 0}
											</Typography>
										</Stack>
										<Stack
											direction="row"
											justifyContent="space-between"
											alignItems="center"
										>
											<Typography
												variant="body1"
												color="secondary"
												gutterBottom
											>
												Staked
											</Typography>
											<Typography
												variant="body1"
												color="primary.light"
												gutterBottom
												sx={{ marginLeft: 1 }}
											>
												0
											</Typography>
										</Stack>
										<Stack
											direction="row"
											justifyContent="space-between"
											alignItems="center"
											spacing={2}
										>
											<Button
												color="secondary"
												variant="contained"
												sx={{
													width: "100%",
													borderRadius: 10,
												}}
												onClick={() => setShow(true)}
											>
												Stake
											</Button>
											<Button
												disabled
												color="secondary"
												variant="contained"
												sx={{
													width: "100%",
													borderRadius: 10,
												}}
											>
												Withdraw
											</Button>
										</Stack>
									</>
								)}
							</Box>
						</Stack>
					</Grid>
				</Grid>
				<Notify open={isShow} handleClose={handleClose} />
			</Container>
		</>
	);
};

export default MainStacking;
