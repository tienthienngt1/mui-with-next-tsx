import Typography from "@mui/material/Typography";
import { PRIMARY_COLOR } from "config/constants";

export default function Copyright() {
	return (
		<div style={{ marginBottom: "20px" }}>
			<Typography variant="body2" color={PRIMARY_COLOR} align="center">
				{"Robosu © All rights reserved."}
			</Typography>
		</div>
	);
}
