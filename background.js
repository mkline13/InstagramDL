var menu =
	chrome.contextMenus.create(
		{"title":"Instagram DL", "contexts":["all"]},
		function () {
			if (chrome.runtime.lastError) {
				console.error(chrome.runtime.lastError.message);
			}
		}
	);


chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
	if (info.menuItemId===menu) {
		console.log("MENU CLICK");
		console.log(info, tab);
		chrome.tabs.sendMessage(tab.id, {greeting: "instagram_dl", action: "img_src"}, saveImage);
	}
}

function saveImage(src) {
	console.log('saving image:', src)
	chrome.downloads.download({url: src})
}