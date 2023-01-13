import Copyright from "components/commons/Copyright.component";
import ContractAddress from "components/commons/ContractAddress.component";
import Nav from "components/commons/Nav.component";
import Container from "@mui/material/Container";
import MainStacking from "components/staking/MainStacking.component";

export default function Stacking() {
	return (
		<Container maxWidth="xl">
			<ContractAddress />
			<Nav />
			<MainStacking />
			<Copyright />
		</Container>
	);
}
