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
							PHASE 1
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
								Robosu Inu is Born
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
							PHASE 2
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								sx={{ bgcolor: "primary.main" }}
							/>
							<TimelineDot color="primary">
								<Groups2Icon />
							</TimelineDot>
							<TimelineConnector
								sx={{ bgcolor: "primary.main" }}
							/>
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<Typography color="primary" variant="h6">
								Preparing and building community
							</Typography>
							<Typography color="primary">
								The Robosu Inu's team steps forward from the
								community
							</Typography>
							<Typography color="primary">
								Launching channels on Social Media
							</Typography>
							<Typography color="primary">
								Marketing campaign before launch
							</Typography>
							<Typography color="primary">
								Cooperation with many influencers
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							variant="h6"
							color="primary"
						>
							PHASE 3
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								sx={{ bgcolor: "primary.main" }}
							/>
							<TimelineDot color="primary">
								<CodeIcon />
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
								Launching Robosu Inu
							</Typography>
							<Typography color="primary">
								Smart Contract creation and verification
							</Typography>
							<Typography color="primary">
								Website launch
							</Typography>
							<Typography color="primary">
								UniSwap V3 listing
							</Typography>
							<Typography color="primary">
								Launching Robosu AI Bot
							</Typography>
							<Typography color="primary.dark">
								Launching stake ecosystem
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							variant="h6"
							color="primary.dark"
						>
							PHASE 4
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
								Continue marketing
							</Typography>
							<Typography color="primary.dark">
								Trending on dextools
							</Typography>
							<Typography color="primary.dark">
								Listing on CGK and CMC
							</Typography>
							<Typography color="primary.dark">
								Promoting on Youtube and Twitter
							</Typography>
							<Typography color="primary.dark">
								Preparation for Top 20 CEX listing
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							variant="h6"
							color="primary.dark"
						>
							PHASE 5
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
								Developing Robosu Inu's Metaverse Ecosystem
							</Typography>
							<Typography color="primary.dark">
								The metaverse era exploded and Robosu Inu also
								wanted to enter
							</Typography>
							<Typography color="primary.dark">
								Releasing Robosu Inu's NFT collection
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							variant="h6"
							color="primary.dark"
						>
							PHASE 6
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
								More to be announced...
							</Typography>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</motion.div>
		</>
	);
}
