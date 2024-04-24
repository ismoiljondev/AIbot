const axios = require("axios");

async function chatBot(msg) {
	const options = {
		method: "POST",
		url: "https://open-ai21.p.rapidapi.com/chatgpt",
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key":
				"233ac017c8msh31120e21475f042p12d7d1jsn6e7f21243ac1",
			"X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
		},
		data: {
			messages: [
				{
					role: "user",
					content: msg,
				},
			],
			web_access: false,
		},
	};

	try {
		const response = await axios.request(options);
		return response.data.result;
	} catch (error) {
		console.error(error);
	}
}

module.exports = chatBot;
