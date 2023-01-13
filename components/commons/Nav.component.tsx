import {
	Divider,
	List,
	ListItem,
	Stack,
	Drawer,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "components/commons/Link.component";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Menu } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { PRIMARY_COLOR } from "config/constants";
import ButtonCustom from "./ButtonCustom.component";
import { styled } from "@mui/system";

const list = [
	{
		title: "Home",
		url: "/",
		target: "_self",
	},
	{
		title: "About Us",
		url: "aboutpage",
		target: "_self",
	},
	{
		title: "Road Map",
		url: "roadmappage",
		target: "_self",
	},
	{
		title: "Stacking",
		url: "/stacking",
		router: true,
		target: "_self",
	},
];

const WrapStack = styled(Stack)({
	"@media(max-width: 768px)": {
		display: "none",
	},
});

const WrapDrawer = styled("div")({
	"@media(min-width: 768px)": {
		display: "none",
	},
});

const MenuDrawer = () => {
	const [isOpen, setOpen] = useState(false);
	const router = useRouter();
	useEffect(() => {
		router.events.on("routeChangeComplete", () => setOpen(false));
		return () => {
			router.events.off("routeChangeComplete", () => {});
		};
	}, [router.asPath]);

	return (
		<WrapDrawer>
			<Button onClick={() => setOpen(!isOpen)}>
				<Menu />
			</Button>
			<Drawer
				anchor="left"
				open={isOpen}
				onClose={() => {
					setOpen(false);
				}}
			>
				<List>
					{list.map((l) => (
						<Link
							key={l.target + Math.random() * 999999}
							href={l.url}
							target={l.target}
						>
							<ListItem sx={{ width: "250px" }}>
								<Typography sx={{ color: PRIMARY_COLOR }}>
									{l.title}
								</Typography>
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
		</WrapDrawer>
	);
};

const Nav = () => {
	const router = useRouter();
	const handleClick = (url: string, isRouter?: boolean) => () => {
		if (isRouter) {
			return router.push(url);
		} else {
			const element = document.getElementById(url);
			element?.scrollIntoView();
		}
	};
	return (
		<Container maxWidth="xl">
			<Grid container>
				<Grid xs={2}>
					<Image src="/logo.png" alt="logo" width={120} height={50} />
				</Grid>
				<Grid xs={10}>
					<Box
						sx={{
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-end",
						}}
					>
						<MenuDrawer />
						<WrapStack
							direction="row"
							justifyContent="flex-end"
							alignItems="center"
							divider={
								<Divider orientation="vertical" flexItem />
							}
							spacing={1}
						>
							{list.map((l) => (
								<ButtonCustom
									key={l.title}
									//@ts-ignore
									onClick={handleClick(l.url, l.router)}
									title={l.title}
								/>
							))}
						</WrapStack>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Nav;
