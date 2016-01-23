$('document').ready(function() {
	$('.detail, .excel').fadeTo('fast', 0.5, function() {
		console.log("form inactive");
	})
})

$('.detail').click(function() {
	$(this).fadeTo('fast', 1, function() {
		console.log("form active");
		$('.excel').fadeTo('fast', 0.5)
	})
})

$('.excel').click(function() {
	$(this).fadeTo('fast', 1, function() {
		console.log("excel active");
		$('.detail').fadeTo('fast', 0.5)
	})
})