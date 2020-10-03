var img_src = null

document.addEventListener("contextmenu",
	e => {
		img_src = e.target.parentNode.querySelector('img').getAttribute('src')
		console.log(img_src)
	}
)

chrome.extension.onMessage.addListener(
	(request, sender, sendResponse) => {
		if (request.greeting === "instagram_dl") {
			if (request.action === "img_src") {
				if (img_src == null) {
					console.log("no image to send to instagram_dl")
				}
				else {
					console.log("sending image to instagram_dl:", img_src)
					sendResponse(img_src)
				}
			}
		}
	}
)