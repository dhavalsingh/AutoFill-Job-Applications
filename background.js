chrome.browserAction.onClicked.addListener(setup);

function setup() {
	noCanvas();

	const buttonode = document.getElementById("button");
	let firstName = document.getElementById("firstName");
	let lastName = document.getElementById("lastName");
	let email = document.getElementById("email");
	let phone = document.getElementById("phone");
	let address = document.getElementById("address");
	let city = document.getElementById("city");
	let zip = document.getElementById("zip");
	let linkedin = document.getElementById("linkedin");
	let github = document.getElementById("git");
	let tweet = document.getElementById("tweet");
	let fb = document.getElementById("fb");
	let port = document.getElementById("port");
	let cover = document.getElementById("cover");

	chrome.storage.sync.get(
		[
			"firstName",
			"lastName",
			"email",
			"phone",
			"address",
			"city",
			"zip",
			"linkedin",
			"github",
			"tweet",
			"fb",
			"port",
			"cover",
		],
		function (result) {
			firstName.value = result.firstName;
			lastName.value = result.lastName;
			email.value = result.email;
			phone.value = result.phone;
			address.value = result.address;
			city.value = result.city;
			zip.value = result.zip;
			linkedin.value = result.linkedin;
			github.value = result.github;
			tweet.value = result.tweet;
			fb.value = result.fb;
			port.value = result.port;
			cover.value = result.cover;
		}
	);

	buttonode.addEventListener("click", () => {
		const message = {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			phone: phone.value,
			address: address.value,
			city: city.value,
			zip: zip.value,
			linkedin: linkedin.value,
			github: github.value,
			tweet: tweet.value,
			fb: fb.value,
			port: port.value,
			cover: cover.value,
		};

		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, message);
		});

		window.close();
	});
}
