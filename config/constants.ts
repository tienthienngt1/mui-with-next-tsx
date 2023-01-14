export const PRIMARY_COLOR = "#fd9c00";
export const LINK_TOKEN =
	"https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56";
export const BUY_TAX = "5%";
export const SELL_TAX = "5%";
export const TELEGRAM_LINK = "https://t.me/robosu_erc20";
export const TWITTER_LINK = 0.2;

// export const PROVIDER_URL = "https://ethereum.publicnode.com";
export const PROVIDER_URL = "https://api.zmok.io/mainnet/oaen6dy8ff6hju9k";

export const CONTRACT = "0x49cd25E358B4F40D7B9495F30319F7D16700E7E9";

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
