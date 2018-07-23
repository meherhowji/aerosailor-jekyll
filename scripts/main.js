import AOS from 'aos';
import './bezier.js'

(function (doc) {
	var elem = doc.getElementById("aerosailor-loader"),
		hasLoaded = window.location.pathname !== '/' && sessionStorage.aerosailor_loaded === 'true';

	hasLoaded && ((elem.style.display = "none"), AOS.init());

	window.onload = function () {
		if (hasLoaded) return;
		hasLoaded ? (elem.style.display = "none") : (elem.className = "page-appear");
		setTimeout(function () {
			elem.style.display = "none";
			AOS.init();
			sessionStorage['aerosailor_loaded'] = true;
		}, 1000);
	}

	var h = doc.documentElement,
		b = doc.body,
		st = 'scrollTop',
		sh = 'scrollHeight',
		progress = doc.querySelector('.page-progress'),
		scroll;
	
	if (progress) {
		doc.addEventListener('scroll', function () {
			scroll = (h[st] || b[st]) / (((h[sh] || b[sh]) - 1250) - h.clientHeight) * 100;
			progress.style.setProperty('--scroll', scroll + '%');
		});
	}
})(document);