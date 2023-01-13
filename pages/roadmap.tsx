import Copyright from "components/commons/Copyright.component";
import ContractAddress from "components/commons/ContractAddress.component";
import Nav from "components/commons/Nav.component";
import Container from "@mui/material/Container";
import MainRoadmap from "components/roadmap/MainRoadmap.component";
import TransitionEffect from "components/commons/TransitionEffect.component";

export default function Roadmap() {
	return (
		<Container id="roadmappage" maxWidth="xl">
			<ContractAddress />
			<Nav />
			<MainRoadmap />
			<Copyright />
		</Container>
	);
}
