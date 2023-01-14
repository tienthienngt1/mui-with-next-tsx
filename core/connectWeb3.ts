import Web3 from "web3";
import { ABI, CONTRACT, PROVIDER_URL } from "../config/constants";
declare var window: any;

const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL));

export const connectWeb3 = async () => {
	if (window.ethereum) {
		try {
			const account = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			if (window.ethereum.chainId !== "0x1") {
				await window.ethereum.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: "0x1" }],
				});
			}
			const balance = await getBalance(account[0]);
			return { account: account[0], balance };
		} catch (error) {
			console.log(error);
		}
	} else {
		alert("Please install Metamask!");
		return;
	}
};

export const getBalance = async (address?: string) => {
	if (!address) return;
	const contract = new web3.eth.Contract(
		//@ts-ignore
		ABI,
		CONTRACT
	);
	const balanceWeit = await contract.methods.balanceOf(address).call();
	const balance = web3.utils.fromWei(balanceWeit, "ether");
	return balance;
};
