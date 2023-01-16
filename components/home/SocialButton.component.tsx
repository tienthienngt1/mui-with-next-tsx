import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "components/commons/Link.component";
import IconButtonCustom from "components/commons/IconButtonCustom.component";
import Typography from "@mui/material/Typography";
import { TELEGRAM_LINK, TWITTER_LINK } from "config/constants";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialButton = () => {
	return (
		<Box sx={{ m: 10 }} justifyContent="center">
			<Typography variant="h4" color="primary" align="center">
				JOIN OUR COMMUNITY
			</Typography>
			<Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
				<Link href={TELEGRAM_LINK} target="_blank">
					<IconButtonCustom>
						<TelegramIcon />
					</IconButtonCustom>
				</Link>
				<Link href={TWITTER_LINK} target="_blank">
					<IconButtonCustom>
						<TwitterIcon />
					</IconButtonCustom>
				</Link>
			</Stack>
		</Box>
	);
};

export default SocialButton;
