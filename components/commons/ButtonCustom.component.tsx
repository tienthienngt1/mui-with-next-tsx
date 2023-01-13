import { styled } from "@mui/material/styles";
import Button, { ButtonTypeMap } from "@mui/material/Button";
import { ReactNode } from "react";
import { PRIMARY_COLOR } from "config/constants";
import { ExtendButtonBase } from "@mui/material";

const Wrap = styled(Button)({
	background: PRIMARY_COLOR,
	color: "#fff",
	"&:hover": {
		color: PRIMARY_COLOR,
		background: "#fff",
	},
});

type Props = {
	title: "string" | ReactNode;
};

const ButtonCustom = ({ title, ...rest }: Props) => {
	return <Wrap {...rest}>{title}</Wrap>;
};

export default ButtonCustom;
