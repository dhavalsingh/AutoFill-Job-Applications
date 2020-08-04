console.log("Chrome Extension ready to go!");
chrome.runtime.onMessage.addListener(replace);
function replace(message, sender, sendresponse) {
	console.log(message);
	chrome.storage.sync.set({
		firstName: message.firstName,
		lastName: message.lastName,
		email: message.email,
		phone: message.phone,
		address: message.address,
		city: message.city,
		zip: message.zip,
		linkedin: message.linkedin,
		github: message.github,
		tweet: message.tweet,
		fb: message.fb,
		port: message.port,
		cover: message.cover,
	});
	var addressFlag = false;
	var labels = document.getElementsByTagName("LABEL");
	for (var i = 0; i < labels.length; i++) {
		if (labels[i].innerHTML.search(/first\s?name/i) !== -1) {
			var fn = document.getElementById(labels[i].htmlFor);
			fn.value = message.firstName;
		}
		if (labels[i].innerHTML.search(/last\s?name/i) !== -1) {
			var ln = document.getElementById(labels[i].htmlFor);
			ln.value = message.lastName;
		}
		if (
			labels[i].innerHTML.search(/first\s?name/i) === -1 &&
			labels[i].innerHTML.search(/last\s?name/i) === -1
		) {
			if (labels[i].innerHTML.search(/full?name/i) !== -1) {
				var n = document.getElementById(labels[i].htmlFor);
				n.value = message.firstName + " " + message.lastName;
			}
		}
		if (labels[i].innerHTML.search(/email/i) !== -1) {
			var em = document.getElementById(labels[i].htmlFor);
			em.value = message.email;
		}
		if (labels[i].innerHTML.search(/phone/i) !== -1) {
			var ph = document.getElementById(labels[i].htmlFor);
			ph.value = message.phone;
		}
		if (
			labels[i].innerHTML.search(/address/i) !== -1 &&
			labels[i].innerHTML.search(/email/i) === -1 &&
			addressFlag === false
		) {
			var ad = document.getElementById(labels[i].htmlFor);
			ad.value = message.address;
			addressFlag = true;
		}
		if (labels[i].innerHTML.search(/city/i) !== -1) {
			var ct = document.getElementById(labels[i].htmlFor);
			ct.value = message.city;
		}
		if (labels[i].innerHTML.search(/postal|zip/i) !== -1) {
			var ph = document.getElementById(labels[i].htmlFor);
			ph.value = message.zip;
		}
		if (labels[i].innerHTML.search(/linkedin/i) !== -1) {
			var lk = document.getElementById(labels[i].htmlFor);
			lk.value = message.linkedin;
		}
		if (labels[i].innerHTML.search(/github/i) !== -1) {
			var ph = document.getElementById(labels[i].htmlFor);
			ph.value = message.github;
		}
		if (labels[i].innerHTML.search(/twitter/i) !== -1) {
			var ph = document.getElementById(labels[i].htmlFor);
			ph.value = message.tweet;
		}
		if (labels[i].innerHTML.search(/facebook/i) !== -1) {
			var ph = document.getElementById(labels[i].htmlFor);
			ph.value = message.fb;
		}
		if (labels[i].innerHTML.search(/portfolio|website/i) !== -1) {
			var ph = document.getElementById(labels[i].htmlFor);
			ph.value = message.port;
		}
		if (labels[i].innerHTML.search(/cover|additional/i) !== -1) {
			var ph = document.getElementById(labels[i].htmlFor);
			ph.value = message.cover;
		}
	}
}

function hide(e) {
	console.log("hide");
	e.target.style.visibility = "hidden";
}
