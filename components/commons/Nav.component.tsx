import { Stack } from "@mui/material";
import Image from "next/image";
import Link from "components/commons/Link.component";
import Container from "@mui/material/Container";
import ButtonCustom from "./ButtonCustom.component";

const Nav = () => {
	return (
		<Container maxWidth="xl">
			<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
				<Link href="/">
					<Image src="/logo.png" alt="logo" width={200} height={35} style={{ cursor: "pointer" }} />
				</Link>
				<Link href="https://robosuinu.gitbook.io/robosuinu/" target="_blank">
					<ButtonCustom title="WhitePaper" />
				</Link>
			</Stack>
		</Container>
	);
};

export default Nav;
