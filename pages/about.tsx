import Copyright from "components/commons/Copyright.component";
import ContractAddress from "components/commons/ContractAddress.component";
import Nav from "components/commons/Nav.component";
import Container from "@mui/material/Container";
import MainAbout from "components/about/MainAbout.component";

export default function About() {
	return (
		<>
			<Container id="aboutpage" maxWidth="xl">
				<ContractAddress />
				<Nav />
				<MainAbout />
				<Copyright />
			</Container>
		</>
	);
}
