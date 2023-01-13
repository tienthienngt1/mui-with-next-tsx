import { useEffect, useState } from "react";

export const useWidthWindow = () => {
	const [width, setWidth] = useState<number>();
	useEffect(() => {
		const innerWidth = window.innerWidth;
		setWidth(innerWidth);
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () => {
			window.removeEventListener("resize", () => {});
		};
	}, []);
	return { width };
};
