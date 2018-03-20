(function (doc) {
	var elem = doc.getElementById("aerosailor-loader"),
		hasLoaded = sessionStorage.aerosailor_loaded === 'true';

	hasLoaded && ((elem.style.display = "none"), AOS.init());

	window.onload = function () {
		if (hasLoaded) return;
		hasLoaded ? (elem.style.display = "none") : (elem.className = "page-appear");
		setTimeout(function () {
			elem.style.display = "none";
			AOS.init();
			sessionStorage['aerosailor_loaded'] = true;
		}, 1050);
	}
})(document);