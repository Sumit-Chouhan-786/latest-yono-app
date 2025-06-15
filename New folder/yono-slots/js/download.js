function copyText(text, callback) {
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	document.execCommand('copy');
	document.getElementById('cp_hgz_input').remove();
	if (callback) { callback(text) }
}
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return ("");
}
async function DownSoft() {
	var u = navigator.userAgent;

	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;


	let gameId = getQueryVariable("from_gameid")
	let code = getQueryVariable("channelCode")
	let copyObj = {
		from_gameid: "from_gameid",
		channelCode: "channelCode"
	}
	let copyStr = JSON.stringify(copyObj)
	copyText(copyStr, function () { console.log('copy successful', copyStr) })

	
	if (isiOS) {
		window.location.href = "https://www.yonoslotsa.com?code=PJBAQ4H3ENR&t=1736242154 "
	}

	else if (isAndroid) {

		window.location.href = "https://www.yonoslotsa.com?code=PJBAQ4H3ENR&t=1736242154 "

	}
	else {

		window.location.href = "https://www.yonoslotsa.com?code=PJBAQ4H3ENR&t=1736242154 "
	}
}