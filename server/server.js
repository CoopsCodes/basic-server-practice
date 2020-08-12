// Define the requirements to run the server
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;

app.use(bodyParser.json());

// Define the server
app.listen(PORT, () => console.log(`Server running on PORT ${3000}`));
app.use(express.static("Public"));
app.use(cors());

// Route definitions
app.get("/api", async (request, response) => {
	try {
		console.log(`GET request from index page: ${request}`);

		const res = await fetch("https://reqres.in/api/users?page=1", {
			headers: { "Access-Control-Allow-Origin": "*" },
		});
		const data = await res.json();
		console.log("Data: " + data.data);

		response.json({
			status: "GET request",
			data: data.data,
		});
	} catch (er) {
		console.log("Error: " + er);
	}
});
