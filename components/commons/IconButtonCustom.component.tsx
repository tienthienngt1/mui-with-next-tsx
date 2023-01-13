import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { ReactNode } from "react";
import { PRIMARY_COLOR } from "config/constants";

const Wrap = styled(IconButton)({
	background: PRIMARY_COLOR,
	color: "#fff",
	"&:hover": {
		color: PRIMARY_COLOR,
		background: "#fff",
	},
});

type Props = {
	children: ReactNode;
};

const IconButtonCustom = ({ children }: Props) => {
	return <Wrap size="large">{children}</Wrap>;
};

export default IconButtonCustom;
