import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import TransitionEffect from "components/commons/TransitionEffect.component";
import BackgroundStar from "components/commons/BackgroundStar.component";
import "../styles/global.css";
import "../styles/backgroundStar.css";
import Loading from "components/commons/Loading.component";
import { useEffect, useState } from "react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<TransitionEffect>
					{isLoading ? <Loading /> : <Component {...pageProps} />}
				</TransitionEffect>
			</ThemeProvider>
			<BackgroundStar />
		</CacheProvider>
	);
}
