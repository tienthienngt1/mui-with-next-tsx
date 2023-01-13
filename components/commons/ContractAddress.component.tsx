import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { PRIMARY_COLOR } from "config/constants";
const ContractAddress = () => {
	const [isShow, setShow] = useState(true);
	return (
		<>
			{isShow && (
				<Container
					sx={{ backgroundColor: PRIMARY_COLOR, marginBottom: 2 }}
					maxWidth="xl"
				>
					<Box sx={{ wordBreak: "break-word", padding: "10px" }}>
						<Typography align="center" variant="h6">
							Contract Address (ERC-20): Comming soon
						</Typography>
					</Box>
				</Container>
			)}
		</>
	);
};

export default ContractAddress;
