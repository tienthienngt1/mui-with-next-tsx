import Web3 from "web3";
import { ABI, CONTRACT, PROVIDER_URL } from "../config/constants";
declare var window: any;

const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL));

export const connectWeb3 = async () => {
	if (window.ethereum) {
		try {
			const address: string[] = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			console.log(address);

			const contract = new web3.eth.Contract(
				//@ts-ignore
				ABI,
				CONTRACT
			);
			const balanceWeit = await contract.methods
				.balanceOf(address[0])
				.call();
			const balance = web3.utils.fromWei(balanceWeit, "ether");
			return { address: address[0], balance };
		} catch (error) {
			console.log(error);
		}
	} else {
		return;
	}
};
