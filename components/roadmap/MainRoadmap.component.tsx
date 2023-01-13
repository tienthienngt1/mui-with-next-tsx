import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import CodeIcon from "@mui/icons-material/Code";
import Groups2Icon from "@mui/icons-material/Groups2";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function MainRoadmap() {
	return (
		<>
			<Box sx={{ my: 10 }}>
				<motion.div
					initial={{
						opacity: 0,
						y: 500,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{ once: true }}
				>
					<Typography align="center" variant="h2" color="primary">
						ROAD MAP
					</Typography>
				</motion.div>
			</Box>
			<motion.div
				initial={{
					opacity: 0,
					y: 500,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
			>
				<Timeline position="alternate">
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							align="right"
							variant="h6"
							color="primary"
						>
							PHASE 4 2022
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								sx={{ bgcolor: "primary.main" }}
							/>
							<TimelineDot color="primary">
								<WbIncandescentIcon />
							</TimelineDot>
							<TimelineConnector
								sx={{ bgcolor: "primary.main" }}
							/>
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<Typography
								color="primary"
								variant="h6"
								component="span"
							>
								Robosu is Born
							</Typography>
							<Typography color="primary">
								The AI and robotics industry in 2022 was grow
								very strongly{" "}
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							variant="h6"
							color="primary"
						>
							PHASE 1 2023
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								sx={{ bgcolor: "primary.main" }}
							/>
							<TimelineDot color="primary">
								<CodeIcon />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<Typography
								color="primary"
								variant="h6"
								component="span"
							>
								Web design and development
							</Typography>
							<Typography color="primary" variant="h6">
								Launch project
							</Typography>
							<Typography color="primary">
								The robotsu core team steps forward from the
								community
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							variant="h6"
							color="primary.dark"
						>
							PHASE 2 2023
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot>
								<SettingsSystemDaydreamIcon />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<Typography
								color="primary.dark"
								variant="h6"
								component="span"
							>
								Developing Robosu's Metaverse Ecosystem
							</Typography>
							<Typography color="primary.dark">
								The metaverse era exploded and Robosu also
								wanted to enter
							</Typography>
							<Typography color="primary.dark">
								The robotsu core team continue marketing
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							variant="h6"
							color="primary.dark"
						>
							PHASE 3 2023
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot>
								<LaptopMacIcon />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<Typography
								color="primary.dark"
								variant="h6"
								component="span"
							></Typography>
							<Typography color="primary.dark" variant="h6">
								Launch Metaverses and robosu's ecosystem
							</Typography>
							<Typography color="primary.dark">
								The robotsu core team marketing and ambition
								list on Binance
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							variant="h6"
							color="primary.dark"
						>
							PHASE 4 2023
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot>
								<Groups2Icon />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<Typography
								color="primary.dark"
								variant="h6"
								component="span"
							></Typography>
							<Typography color="primary.dark" variant="h6">
								List on Binance
							</Typography>
							<Typography color="primary.dark">
								The robotsu core team marketing work Binance's
								team together and list on Binance exchange
							</Typography>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</motion.div>
		</>
	);
}
