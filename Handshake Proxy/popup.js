
document.addEventListener("DOMContentLoaded", () => { startUp(); });

function startUp()
{
	let tickbox = document.form1.handshake;
	if (tickbox) tickbox.addEventListener("change", (event) => {
		let tickbox = document.form1.handshake;
		if (tickbox.checked) setProxyOn(); else setProxyOff();
		});
	getProxy();
}


function getProxy()
{
	chrome.proxy.settings.get( {'incognito': false},
		(config) => { 
			let tickbox = document.form1.handshake;
			console.log(config.value);
			if (tickbox) 
				tickbox.checked = (config.value.mode == "fixed_servers");
			});
}


function setProxyOn()
{
	let config = {
		mode: "fixed_servers",
		rules: {
			singleProxy: {
				scheme: "http",
				host: "109.169.23.69",
				port: 3128
				},
			bypassList: ["*.ly","*.co","*.com","*.net","*.uk","*.us","*.de"]
			}
		};
	chrome.proxy.settings.set({value: config, scope: "regular"}, () => { getProxy() });
}


function setProxyOff()
{
	let config = { mode: "system" };
	chrome.proxy.settings.set({value: config, scope: "regular"}, () => { getProxy() });
}
