export const PRIMARY_COLOR = "#fd9c00";
export const LINK_TOKEN = "https://app.uniswap.org/#/swap?outputCurrency=0xa679DCB2A39Dc915eb97ac18672A1c89fA11eCf1";
export const BUY_TAX = "5%";
export const SELL_TAX = "5%";
export const TELEGRAM_LINK = "https://t.me/robosu_erc20";
export const TWITTER_LINK = "https://twitter.com/robosu_erc20";

// export const PROVIDER_URL = "https://ethereum.publicnode.com";
export const PROVIDER_URL = "https://api.zmok.io/mainnet/oaen6dy8ff6hju9k";

export const CONTRACT = "0xa679DCB2A39Dc915eb97ac18672A1c89fA11eCf1";

export const ABI = [
	{
		constant: true,
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
];
