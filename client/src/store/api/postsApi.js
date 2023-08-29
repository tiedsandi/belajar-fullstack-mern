import axios from "axios";

export default axios.create({
	baseURL: "http://localhost:5000/posts",
	// timeout: 5000,
	// headers: {
	// "Content-Type": "application/json",
	// Authorization: "Bearer your_token",
	// },
});
