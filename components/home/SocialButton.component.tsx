import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "components/commons/Link.component";
import IconButtonCustom from "components/commons/IconButtonCustom.component";
import Typography from "@mui/material/Typography";

const SocialButton = () => {
	return (
		<Box sx={{ m: 10 }} justifyContent="center">
			<Typography variant="h4" color="primary" align="center">
				JOIN OUR COMMUNITY
			</Typography>
			<Stack
				direction="row"
				spacing={2}
				justifyContent="center"
				sx={{ my: 10 }}
			>
				<Link href="https://t.me/PepeCoin_Group" target="_blank">
					<IconButtonCustom>
						<TelegramIcon />
					</IconButtonCustom>
				</Link>
				<Link href="https://t.me/PepeCoin_Group" target="_blank">
					<IconButtonCustom>
						<TwitterIcon />
					</IconButtonCustom>
				</Link>
			</Stack>
		</Box>
	);
};

export default SocialButton;
