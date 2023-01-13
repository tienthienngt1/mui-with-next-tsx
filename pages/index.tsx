import Copyright from "components/commons/Copyright.component";
import Main from "components/home/Main.component";
import ContractAddress from "components/commons/ContractAddress.component";
import Nav from "components/commons/Nav.component";
import Container from "@mui/material/Container";
import MainAbout from "components/about/MainAbout.component";
import MainRoadmap from "components/roadmap/MainRoadmap.component";
import MainParter from "components/partner/MainParter.component";

export default function Home() {
	return (
		<>
			<Container maxWidth="xl">
				<ContractAddress />
				<Nav />
				<Main />
				<MainAbout />
				<MainParter />
				<MainRoadmap />
				<Copyright />
			</Container>
			<div className="home-background"></div>
		</>
	);
}
