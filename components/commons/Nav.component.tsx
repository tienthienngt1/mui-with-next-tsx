import { Stack } from "@mui/material";
import Image from "next/image";
import Link from "components/commons/Link.component";
import Container from "@mui/material/Container";

const Nav = () => {
	return (
		<Container maxWidth="xl">
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				spacing={1}
			>
				<Link href="/">
					<Image
						src="/logo.png"
						alt="logo"
						width={200}
						height={35}
						style={{ cursor: "pointer" }}
					/>
				</Link>
			</Stack>
		</Container>
	);
};

export default Nav;
