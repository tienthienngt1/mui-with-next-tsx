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
		title: "Stacking",
		href: "/stacking",
		target: "_self",
	},
];

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
				{/* {list.map((l) => (
					<Link href={l.href} target={l.target}>
						<ButtonCustom key={l.title} title={l.title} />
					</Link>
				))} */}
			</Stack>
		</Container>
	);
};

export default Nav;
