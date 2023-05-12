import axios from "axios";

export const loadIpAddress = async () => {
	try {
		const ipResponse = await axios.get(
			"https://api.ipdata.co?api-key=9c9a991c63e3e4308a53ce761e20ae35289b55377e2780e84db07f49"
		);

		return ipResponse.data;
	} catch (err) {
		throw err.data.error;
	}
};
