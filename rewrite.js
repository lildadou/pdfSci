(function() {
	var data = [
	    		["https?://ieeexplore.ieee.org(.*)/stamp/stamp.jsp", function() {return document.querySelectorAll("frame")[1].src;}],
	    		["https?://^onlinelibrary\.wiley\.com(.*)/pdf", function() {return document.querySelectorAll("iframe")[0].src;}]
	    	];

	var getPdfUrlGetter = function(webPageUrl) {
		for (var i=0; i<data.length; i++) {
			var regexp = new RegExp(data[i][0]);
			if (regexp.exec(webPageUrl) != null) return data[i][1];
		}
		
		return null;
	};
	
	var pdfUrlGetter = getPdfUrlGetter(location.href);
	if (pdfUrlGetter != null) location.href = pdfUrlGetter();
})();