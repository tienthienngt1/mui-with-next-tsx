import Copyright from "components/commons/Copyright.component";
import ContractAddress from "components/commons/ContractAddress.component";
import Nav from "components/commons/Nav.component";
import Container from "@mui/material/Container";
import MainRoadmap from "components/roadmap/MainRoadmap.component";

export default function Roadmap() {
	return (
		<Container maxWidth="xl">
			<ContractAddress />
			<Nav />
			<MainRoadmap />
			<Copyright />
		</Container>
	);
}
