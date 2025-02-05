const get_time = () => {
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let time = "";
	if (hours < 10) {
		time += "0";
	}
	time += `${hours}`;
	time += ":";
	if (minutes < 10) {
		time += "0";
	}
	time += `${minutes}`;
	return time;
}
const add_message = (event) => {
	let message = new String();
	if (event.key === "Enter") {
		message = document.getElementById("input_area").value;
		document.getElementById("input_area").value = "";
		let history = document.getElementsByClassName("chat-history-body")[0];
		let msg_node = document.createElement("div");
		let msg_content_node = document.createElement("div");
		let msg_timestamp_node = document.createElement("div");
		msg_node.className = "chat-history-message";

		msg_content_node.className = "chat-history-content";
		msg_content_node.innerText = message;

		msg_timestamp_node.className = "chat-history-timestamp";
		msg_timestamp_node.innerText = get_time();
		msg_node.appendChild(msg_content_node);
		msg_node.appendChild(msg_timestamp_node);
		history.appendChild(msg_node);
		return;
	}
}

const change_chat_header = (event) => {
	document.getElementById("chat-history-header-name").innerText = event.target.innerText;
};


document.getElementById("input_area").addEventListener("keydown", add_message);
Array.from(document.getElementsByClassName("chat-item"))
	.forEach((node) => node.addEventListener("click", change_chat_header));
